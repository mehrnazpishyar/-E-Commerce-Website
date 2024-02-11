import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";

const Woman = () => {
    
  const {
    allProducts,
    isLoading,
    filteredProducts,
    query,
    setFilteredProducts,
  } = useContext(AppContext);

  useEffect(() => {
    // Filter products for the women's category
    const womenProducts = allProducts.filter(
      (item) => item.category === "women's clothing"
    );
  
    // Filter the women's products based on the search query
    const filteredWomenProducts = womenProducts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  
    // Update the filteredProducts state with the result
    setFilteredProducts(filteredWomenProducts);
  }, [allProducts, query, setFilteredProducts]);

  return (
    <div className="product-category-container">
      <h2>{`Women's Category`}</h2>

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

export default Woman;
