import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { useAuth0 } from "@auth0/auth0-react";

const ProductsItems = ({ item }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  console.log(isAuthenticated)
  const { viewDetail, addToCart, cart, addToFavorite, favorite } =
    useContext(AppContext);

  const isAddToCart = cart.some((cartItem) => cartItem.id === item.id);
  const isAddToFavorite = favorite.some((cartItem) => cartItem.id === item.id);

  return (
    <div className="item-card">
      <img src={item.image} alt="products" />
      <h5>{item.title.slice(0, 40)}</h5>
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
        {isAuthenticated ? (
          isAddToCart ? (
            <p>Already Added to 🛒</p>
          ) : (
            <button className="btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          )
        ) : (
          <button className="btn" onClick={loginWithRedirect}>
            Add to Cart
          </button>
        )}

        {isAuthenticated ? (
          isAddToFavorite ? (
            <p>Already Added to ❤️</p>
          ) : (
            <button className="btn" onClick={() => addToFavorite(item)}>
              Add to Favorite
            </button>
          )
        ) : (
          <button className="btn" onClick={loginWithRedirect}>
            Add to Favorite
          </button>
        )}
      </div>
      <div className="card-icons">
        <Link to="" onClick={() => addToFavorite(item)}>
          <FaRegHeart />
        </Link>
        <Link to="" onClick={() => viewDetail(item)}>
          <PiEye className="eye-icon" />
        </Link>
        <Link to="" onClick={() => addToCart(item)}>
          <TiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default ProductsItems;
