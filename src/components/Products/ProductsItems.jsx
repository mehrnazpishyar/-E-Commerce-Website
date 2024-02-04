import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const ProductsItems = ({ item }) => {
  const { viewDetail } = useContext(AppContext);
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
        <button className="btn">Add to Cart</button>
        <button className="btn">Add to Favorite</button>
      </div>
      <div className="card-icons">
        <Link href="">
          <FaRegHeart />
        </Link>
        <Link href=""  onClick={() =>{viewDetail(item)}}>
          <PiEye className="eye-icon"  />
        </Link>
        <Link href="">
          <TiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default ProductsItems;
