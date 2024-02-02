import ProductCategories from "./ProductCategories/ProductCategories";
import ProductsFilter from "./ProductFilters/ProductsFilter";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "./ProductsItems";

const Products = () => {
  const { isLoading, allProducts, query } = useContext(AppContext);

  return (
    <div className="products">
      <ProductCategories />
      <hr />
      <div className="title">
        <h1>All Products</h1>
      </div>
      <ProductsFilter />
      <div className="shop-container">
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
  );
};

export default Products;
