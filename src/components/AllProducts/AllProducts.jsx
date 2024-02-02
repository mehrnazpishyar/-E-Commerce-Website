
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { isLoading, allProducts, setAllProducts,query } = useContext(AppContext);

  const filterProducts = (category) => {
    const filteredProducts = allProducts.filter((product) => product.category === category);
    setAllProducts(filteredProducts);
  };


  return (
    <div className="allproducts">
      <h2># Products</h2>
      <div className="all-container">
        <div className="filter">
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li >
                <Link to="">All Products</Link>
              </li>
              <li onClick={() => filterProducts("women's clothing")}>
                <Link to="">Women</Link>
              </li>
              <li onClick={() => filterProducts("men's clothing")}>
                <Link to="">Men</Link>
              </li>
              <li onClick={() => filterProducts("jewelery")}>
                <Link to="">Jewelery</Link>
              </li>
              <li onClick={() => filterProducts("electronics")}>
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
              allProducts
              .filter((item) => {
                return query.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(query);
              })
              .map((item) => <ProductsItems key={item.id} item={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
