import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

const Cart = () => {
  const { cart } = useContext(AppContext);
  const [isClick, setIsClick] = useState(false);

  // Calculate the total price
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // Change button to p tag
  const handleButtonClick = () => {
    setIsClick(true);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="emptycart">
          <h1 className="empty">Cart is Empty</h1>
          <Link to="/all" className="empty-btn">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="cart-main">
          <CartItem />
          <div className="checkout">
            <div className="checkout-content">
              <h2>Cart Totals</h2>
              <p>
                Subtotal
                <span>${totalPrice}</span>
              </p>
              <p className="shipping">
                Shipping
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis, fugit!
                </span>
              </p>
            </div>
            <p className="total-price">
              Total <span>${totalPrice}</span>
            </p>
            {isClick ? (
              <p className="purchase">Congratulations! The purchase was successful.</p>
            ) : (
              <button onClick={handleButtonClick}>Checkout</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
