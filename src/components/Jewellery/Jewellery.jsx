import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";
import { Link } from "react-router-dom";

const Jewellery = () => {
    
  const {
    allProducts,
    isLoading,
    filteredProducts,
    query,
    setFilteredProducts,
  } = useContext(AppContext);

  useEffect(() => {
    // Filter products for the Jewelery's category
    const JeweleryProducts = allProducts.filter(
      (item) => item.category === "jewelery"
    );

    // Filter the Jewelery's products based on the search query
    const filteredJeweleryProducts = JeweleryProducts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Update the filteredProducts state with the result
    setFilteredProducts(filteredJeweleryProducts);
  }, [allProducts, query, setFilteredProducts]);

  return (
    <div className="product-category-container">
        <Link className="arrow-shop" to="/">
        <span className="go-shop">Go Home</span>
      </Link>
      <h2>Jewelery's Category</h2>

      <div className="product-cart-category">
        {isLoading ? (
          <Loader />
        ) : (
          filteredProducts.map((item) => (
            <ProductsItems key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Jewellery;
