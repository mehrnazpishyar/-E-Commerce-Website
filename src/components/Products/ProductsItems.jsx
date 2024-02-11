import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { LuHeartOff } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";

const ProductsItems = ({ item }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const { viewDetail, addToCart, cart, addToFavorite, favorite, setCart } =
    useContext(AppContext);

  const isAddToCart = cart.some((cartItem) => cartItem.id === item.id);
  const isAddToFavorite = favorite.some((cartItem) => cartItem.id === item.id);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      if (!isAddToCart) {
        addToCart(item);
      }
    } else {
      loginWithRedirect();
    }
  };

  const handleAddToFavorite = () => {
    if (isAuthenticated) {
      if (!isAddToFavorite) {
        addToFavorite(item);
      }
    } else {
      loginWithRedirect();
    }
  };

  // Increase quantity
  const incQty = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decQty = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // Remove product from cart
  const removeProduct = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

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
        {isAddToCart ? (
          <div className="buttons-box">
            {cart.find((cartItem) => cartItem.id === item.id)?.qty === 1 ? (
              <IoTrashOutline
                className="trash"
                onClick={() => removeProduct(item)}
              />
            ) : (
              <button className="inc-dec" onClick={() => decQty(item)}>-</button>
            )}
            <span>{cart.find((cartItem) => cartItem.id === item.id)?.qty}</span>
            <button className="inc-dec" onClick={() => incQty(item)}>+</button>
          </div>
        ) : (
          <button className="btn" onClick={() => handleAddToCart(item)}>
            Add to Cart
          </button>
        )}
      </div>

      <div className="card-icons">
        {isAddToFavorite ? (
          <Link to="">
            <LuHeartOff />
          </Link>
        ) : (
          <Link to="" onClick={() => handleAddToFavorite(item)}>
            <FaRegHeart />
          </Link>
        )}
        <Link to="" onClick={() => viewDetail(item)}>
          <PiEye className="eye-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProductsItems;
