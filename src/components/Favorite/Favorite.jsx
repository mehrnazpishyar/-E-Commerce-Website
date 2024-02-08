import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";

const Favorite = () => {
  const { favorite, setFavorite, addToCartFromFavorite } =
    useContext(AppContext);

  // Remove product from favorite
  const removeProduct = (product) => {
    setFavorite((prevCart) =>
      prevCart.filter((item) => item.id !== product.id)
    );
  };

  //Reset Favorite
  const ResetFavorite = () => {
    setFavorite([]);
  };


  return (
    <div className="shopping-favorite">
      {!favorite.length ? (
        <div className="emptyfavorite">
          <h2 className="empty">Favorite is Empty</h2>
          <Link to="/all" className="empty-btn">
            Go Products
          </Link>
        </div>
      ) : (
        <div className="favorite-items">
          <h2>Favorite Products :</h2>
          <div className="favorite-main">
            {favorite.map((item) => {
              return (
                <div key={item.id} className="favorite-products">
                  <div className="favorite-content">
                    <div className="close-icon">
                      <IoTrashOutline onClick={() => removeProduct(item)} />
                    </div>
                    <div>
                      <img src={item.image} alt="image" />
                    </div>
                  </div>
                  <h4>{item.title.slice(0, 20)}</h4>
                  <p>${item.price}</p>
                  <button onClick={()=>addToCartFromFavorite(item)} className="add-cart">
                    Add To Cart
                  </button>
              
                </div>
              );
            })}
          </div>

          <div className="buttons-footer">
    
              <Link to="/all" className="arrow-icon">
                <HiArrowLeft />
              </Link>

              <Link to="/all" className="go-shop">
                go shopping
              </Link>
        
      
              <button onClick={ResetFavorite} className="reset">
                Reset Cart
              </button>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;
