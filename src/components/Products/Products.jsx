import ProductCategories from "./ProductCategories/ProductCategories";
import ProductsFilter from "./ProductFilters/ProductsFilter";
import ProductsCart from "./ProductsCart";

const Products = () => {
  return (
    <div className="products">
      <ProductCategories />
      <hr />
      <div className="title">
        <h2>All Products</h2>
      </div>

      <ProductsFilter />

      <div className="shop">
        <div className="shop-container">
          <div className="product-cart">
            <ProductsCart />
            <ProductsCart />
            <ProductsCart />
            <ProductsCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
