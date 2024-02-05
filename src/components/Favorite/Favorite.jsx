import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Favorite = () => {
  const { favorite, setFavorite, addToCartFromFavorite } =
    useContext(AppContext);

  // Remove product from favorite
  const removeProduct = (product) => {
    setFavorite((prevCart) =>
      prevCart.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="shopping-favorite">
      {favorite.length === 0 ? (
        <div className="emptyfavorite">
          <h2 className="empty">Favorite is Empty</h2>
          <Link to="/all" className="empty-btn">
            Go All Products
          </Link>
        </div>
      ) : (
        <div className="favorite-container">
          <div className="content">
            {favorite.map((item) => (
              <div className="favorite-item" key={item.id}>
                <div className="image-box">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{item.category}</h4>
                    <h3>{item.title}</h3>
                    <p>Price : ${item.price}</p>
                  </div>
                  <div className="addtocart">
                    <button onClick={() => addToCartFromFavorite(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="close">
                  <button onClick={() => removeProduct(item)}>
                    <IoMdCloseCircleOutline className="close-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;
