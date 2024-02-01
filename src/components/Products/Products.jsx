import ProductCategories from "./ProductCategories/ProductCategories";
import ProductsFilter from "./ProductFilters/ProductsFilter";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "./ProductsItems";

const Products = () => {
  const { isLoading, allproducts } = useContext(AppContext);

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
                allproducts.map((item) => (
                  <ProductsItems key={item.id} item={item} />
                ))
              )}
          </div>
      </div>
    </div>
  );
};

export default Products;
