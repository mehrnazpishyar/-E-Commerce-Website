import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";

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
