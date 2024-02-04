import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const ProductsItems = ({ item }) => {
  const { viewDetail, addToCart,cart} = useContext(AppContext);
  const isAdd = cart.some((cartItem) => cartItem.id === item.id);
  return (
    <div className="item-card">
      <img src={item.image} alt="products" />
      <h5>{item.title.slice(0, 45)}</h5>
      <p>{item.category} category</p>
      <div className="rating">
        <Link href="">
          <MdOutlineStar /> <span>{item.rating.rate}</span>
        </Link>
      </div>
      <div className="price">
        <span>${item.price}</span>
      </div>
      <div className="card-buttons">
        
      {isAdd ? (
          <p>Already Added! ✅</p>
        ) : (
          <button className="btn" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        )}
        <button className="btn">Add to Favorite</button>
      </div>
      <div className="card-icons">
        <Link to="">
          <FaRegHeart />
        </Link>
        <Link to=""  onClick={() =>{viewDetail(item)}}>
          <PiEye className="eye-icon"  />
        </Link>
        <Link to="">
          <TiShoppingCart onClick={() =>{addToCart(item)}}/>
        </Link>
      </div>
    </div>
  );
};

export default ProductsItems;
