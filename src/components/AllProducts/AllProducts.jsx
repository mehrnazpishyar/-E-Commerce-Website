import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";


const AllProducts = () => {

  const {
    isLoading,
    query,
    allProducts,
    filteredProducts,
    setFilteredProducts,
  } = useContext(AppContext);

  return (
    <div className="allproducts">
      <h2># Products</h2>
      <div className="all-container">
        <div className="filter">
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>
                <button onClick={() => setFilteredProducts(allProducts)}>
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilteredProducts(
                      allProducts.filter(
                        (item) => item.category === "women's clothing"
                      )
                    )
                  }
                >
                  Women
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilteredProducts(
                      allProducts.filter(
                        (item) => item.category === "men's clothing"
                      )
                    )
                  }
                >
                  Men
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilteredProducts(
                      allProducts.filter((item) => item.category === "jewelery")
                    )
                  }
                >
                  Jewelery
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilteredProducts(
                      allProducts.filter(
                        (item) => item.category === "electronics"
                      )
                    )
                  }
                >
                  Electronics
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="allproducts-content">
          <div className="product-cart">
            {isLoading ? (
              <Loader />
            ) : (
              filteredProducts
                .filter((item) => {
                  return (
                    query.toLowerCase() === "" ||
                    item.title.toLowerCase().includes(query)
                  );
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
