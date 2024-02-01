import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import Loader from "../Loader/Loader";
import ProductsItems from "../Products/ProductsItems";
import { Link } from "react-router-dom";


const AllProducts = () => {
  const { isLoading, allproducts } = useContext(AppContext);
  return (
    <div className="allproducts">
   <div className="filter">
 <div className="categories">
  <h3>Categories</h3>
   <ul>
     <li><Link to="">Men</Link></li>
    <li><Link to="">women</Link></li>
    <li><Link to="">Jewelery</Link></li>
    <li><Link to="">Electronics</Link></li>
   </ul>
 </div>
 </div>
    <div className="allproducts-container">
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
  )
}

export default AllProducts






