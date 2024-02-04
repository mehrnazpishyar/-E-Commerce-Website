import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = () => {
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

  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <div className="shopping-cart">
      {cart.length === 0 ? (
        <div className="emptycart">
          <h2 className="empty">Cart is Empty</h2>
          <Link to="/all" className="empty-btn">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="content">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="image-box">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{item.category}</h4>
                    <h3>{item.title}</h3>
                    <p>Price : ${item.price}</p>
                    <div className="qty">
                      <button className="inc" onClick={() => incQty(item)}>
                        +
                      </button>
                      <input type="text" value={item.qty} readOnly />
                      <button className="dec" onClick={() => decQty(item)}>
                        -
                      </button>
                    </div>
                    <h4 className="subtotal">
                      Subtotal: $ {item.price * item.qty}
                    </h4>
                  </div>
                  <div className="close">
                    <button onClick={() => removeProduct(item)}>
                      <IoMdCloseCircleOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total-container">
            <h2 className="totalprice">Total : $ {totalPrice}</h2>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
