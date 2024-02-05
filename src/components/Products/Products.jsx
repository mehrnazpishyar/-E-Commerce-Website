import ProductCategories from "../../components/ProductCategories/ProductCategories";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "./ProductsItems";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import CategorieFilter from "../ProductFilters/CategorieFilter";
import PriceFilter from "../ProductFilters/PriceFilter";


const Products = () => {
  const { isLoading, allProducts, query, selectedCategory } =
    useContext(AppContext);

  const filterProducts = selectedCategory
    ? allProducts.filter(
        (product) => product.category === selectedCategory.value
      )
    : allProducts;

  return (
    <div className="products">
      <ProductDetail />
      <ProductCategories />
      <hr />
      <div className="title">
        <h1>Products Filter</h1>
      </div>
      <div className="products-filter">
        <CategorieFilter />
        <PriceFilter />
      </div>
      <div className="shop-container">
        <div className="product-cart">
          {isLoading ? (
            <Loader />
          ) : (
            filterProducts
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
