import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { MdOutlineClose } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartItem = () => {
  const { cart, setCart } = useContext(AppContext);

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

  // Reset Cart
  const ResetCart = () => {
    setCart([]);
  };

  return (
    <div className="cart-items">
      <h2>Shopping cart :</h2>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id} className="cart-products">
              <div className="cartitem-content">
                <div className="close-icon">
                  <MdOutlineClose onClick={() => removeProduct(item)} />
                </div>
                <div>
                  <img src={item.image} alt="image" />
                </div>
              </div>
              <h4>{item.title.slice(0, 40)}</h4>
              <p>${item.price}</p>
              <div>
                <div className="buttons-box">
                  {item.qty === 1 ? (
                    <IoTrashOutline
                      className="trash-icon"
                      onClick={() => removeProduct(item)}
                    />
                  ) : (
                    <button onClick={() => decQty(item)}>-</button>
                  )}
                  <span>{item.qty}</span>
                  <button onClick={() => incQty(item)}>+</button>
                </div>
              </div>
              <p className="total-qty">${item.qty * item.price}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <button onClick={ResetCart} className="reset">
            Reset Cart
          </button>
        </div>
        <div>
         <div className="arrow-shop">
            <Link to="/all" className="arrow-icon">
              <HiArrowLeft />
            </Link>
            <Link to="/all" className="go-shop">go shopping</Link>
         </div>
       
        </div>
      </div>
    </div>
  );
};

export default CartItem;
