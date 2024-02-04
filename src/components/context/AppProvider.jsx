import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export const AppContext = createContext();

const apiUrl = "https://fakestoreapi.com/products";

export default function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [detail, setDetail] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  const [cart, setCart] = useState([]);
  

  // --------- fetch Data -----------
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
        toast.error("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  //------------ product detail-------------
  const viewDetail = (product) => {
    setDetail([product]);
    setCloseModal(true);
  };

  //------------ add to cart-------------

  const addToCart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });

    if (exsit) {
      toast.success("This Product is already added to cart!");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Product is added to cart")
    }
  };
 




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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
