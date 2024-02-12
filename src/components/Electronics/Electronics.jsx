import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";
import { Link } from "react-router-dom";

const Electronics = () => {
    
  const {
    allProducts,
    isLoading,
    filteredProducts,
    query,
    setFilteredProducts,
  } = useContext(AppContext);

  useEffect(() => {
    //------ filter products for the Electronic's category-----
    const ElectronicProducts = allProducts.filter(
      (item) => item.category === "electronics"
    );

    //---- filter the Electronic's products based on the search query-----
    const filteredElectronicProducts = ElectronicProducts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    // ------update the filteredProducts state with the result--------
    setFilteredProducts(filteredElectronicProducts);
  }, [allProducts, query, setFilteredProducts]);

  return (
    <div className="product-category-container">
        <Link className="arrow-shop" to="/">
        <span className="go-shop">Go Home</span>
      </Link>
      <h2>{`Electronic's Category`}</h2>

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

export default Electronics;
