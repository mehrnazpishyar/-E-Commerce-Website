// AllProducts.js
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { isLoading, allproducts, setAllproducts, originalProducts } = useContext(
    AppContext
  );

  const filterProduct = (product) => {
    const update = originalProducts.filter((x) => {
      return x.category === product;
    });
    setAllproducts(update);
  };

  const resetProducts = () => {
    setAllproducts(originalProducts);
  };

  return (
    <div className="allproducts">
      <h2># Products</h2>
      <div className="all-container">
        <div className="filter">
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li onClick={resetProducts}>
                <Link to="">All Products</Link>
              </li>
              <li onClick={() => filterProduct("men's clothing")}>
                <Link to="">Men</Link>
              </li>
              <li onClick={() => filterProduct("women's clothing")}>
                <Link to="">Women</Link>
              </li>
              <li onClick={() => filterProduct("jewelery")}>
                <Link to="">Jewelery</Link>
              </li>
              <li onClick={() => filterProduct("electronics")}>
                <Link to="">Electronics</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="allproducts-content">
          <div className="product-cart">
            {isLoading ? (
              <Loader />
            ) : (
              allproducts.map((item) => (
                <ProductsItems key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
