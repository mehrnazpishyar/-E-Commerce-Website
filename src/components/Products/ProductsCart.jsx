import imag from "../../../public/man.png";
import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const ProductsCart = () => {
  return (
    <div className="item-card">
      <img src={imag} alt="" />
      <h4>man tshirt</h4>
      <p>men category</p>
      <div className="rating">
        <a href="">
          <MdOutlineStar />
        </a>
        <a href="">
          <MdOutlineStar />
        </a>
        <a href="">
          <MdOutlineStar />
        </a>
        <a href="">
          <MdOutlineStar />
        </a>
        <a href="">
          <MdOutlineStar />
        </a>
      </div>
      <div className="price">
        <span>$100</span>
      </div>
      <div className="card-buttons">
        <button className="btn">Add to Cart</button>
        <button className="btn">Add to Favorite</button>
      </div>
      <div className="card-icons">
        <a href=""><FaRegHeart/></a>
        <a href=""><TiShoppingCart/></a>
      </div>
    </div>
  );
};

export default ProductsCart;
