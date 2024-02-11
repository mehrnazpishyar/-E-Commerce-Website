import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

export const AppContext = createContext();

const apiUrl = "https://fakestoreapi.com/products";

export default function AppProvider({ children }) {
  const { category } = useParams();
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [detail, setDetail] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("CARTS")) || []
  );
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("FAVOURITE")) || []
  );

  useEffect(() => {
    localStorage.setItem("FAVOURITE", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    localStorage.setItem("CARTS", JSON.stringify(cart));
  }, [cart]);

  // ------------ fetch Data -------------
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const url = query ? `${apiUrl}?title=${query}` : apiUrl;
        const { data } = await axios.get(url);
        setAllProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setAllProducts([]);
        setFilteredProducts([]);
        toast.error("Error fetching data", {
          style: {
            background: "#fd2c2c",
            color: "#ffffff",
          },
          iconTheme: {
            primary: "#ffffff",
            secondary: "#fd2c2c",
          },
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query, category]);

  //------------ product detail-------------
  const viewDetail = (product) => {
    setDetail([product]);
    setCloseModal(true);
  };

  //------------ add to cart----------------

  const addToCart = (product) => {
    setCart([...cart, { ...product, qty: product.qty || 1 }]);

    setCloseModal(false);
    toast.success("Product is added to cart", {
      style: {
        background: "#1adb21",
        color: "#ffffff",
      },
      iconTheme: {
        primary: "#ffffff",
        secondary: "#1adb21",
      },
    });
  };

  //------------ add to favorite-------------

  const addToFavorite = (product) => {
    setFavorite([...favorite, { ...product, qty: 1 }]);

    toast.success("Product is added to Favorite", {
      style: {
        background: "#1adb21",
        color: "#ffffff",
      },
      iconTheme: {
        primary: "#ffffff",
        secondary: "#1adb21",
      },
    });
  };

  //------------ add to cart from favorite-------------
  const addToCartFromFavorite = (product) => {
    // Check if the product is not already in the cart
    if (!cart.some((cartItem) => cartItem.id === product.id)) {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, qty: product.qty || 1 },
      ]);
      toast.success("Product is added to cart", {
        style: {
          background: "#1adb21",
          color: "#ffffff",
        },
        iconTheme: {
          primary: "#ffffff",
          secondary: "#1adb21",
        },
      });

      // Remove the product from favorites
      const updatedFavorites = favorite.filter((x) => x.id !== product.id);
      setFavorite(updatedFavorites);
    } else {
      // If the product is already in the cart, show a message or handle accordingly
      toast.error("Product is already in the cart", {
        style: {
          background: "#fd2c2c",
          color: "#ffffff",
        },
        iconTheme: {
          primary: "#ffffff",
          secondary: "#fd2c2c",
        },
      });
    }
  };

  //------------ Sort Product by price-------------
  function sortProductsByPrice(e) {
    e.stopPropagation();

    if (e.target.value === "LowToHigh") {
      setAllProducts([
        ...allProducts.sort((a, b) => {
          return a.price - b.price;
        }),
      ]);
    }

    if (e.target.value === "HighToLow") {
      setAllProducts([
        ...allProducts.sort((a, b) => {
          return b.price - a.price;
        }),
      ]);
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        allProducts,
        setAllProducts,
        query,
        setQuery,
        filteredProducts,
        setFilteredProducts,
        selectedCategory,
        setSelectedCategory,
        detail,
        setDetail,
        viewDetail,
        closeModal,
        setCloseModal,
        cart,
        setCart,
        addToCart,
        addToFavorite,
        favorite,
        setFavorite,
        addToCartFromFavorite,
        sortProductsByPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
