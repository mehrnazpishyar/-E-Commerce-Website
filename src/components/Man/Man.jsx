import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const Man = () => {
  const {
    allProducts,
    isLoading,
    filteredProducts,
    query,
    setFilteredProducts,
  } = useContext(AppContext);

  useEffect(() => {
    const menProducts = allProducts.filter(
      (item) => item.category === "men's clothing"
    );

    const filteredMenProducts = menProducts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filteredMenProducts);
  }, [allProducts, query, setFilteredProducts]);

  return (
    <div className="product-category-container">
      <Link className="arrow-shop" to="/">
        <span className="go-shop">Go Home</span>
      </Link>

      <h2>Men's Category</h2>

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

export default Man;
