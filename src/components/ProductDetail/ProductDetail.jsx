import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ProductDetail = () => {
  const { detail, closeModal, setCloseModal, addToCart, cart } =
    useContext(AppContext);

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setCloseModal(false);
    }
  };

  useEffect(() => {
    if (closeModal) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Detach event listener when the modal is closed
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [closeModal]);

  const isAddToCart = cart.some((cartItem) => cartItem.id === detail[0]?.id);

  return (
    <>
      {closeModal && (
        <div
          className={`modal-overlay product-detail ${closeModal ? "open" : ""}`}
        >
          <div className="detail-container">
            <button className="btn-close">
              <IoMdCloseCircleOutline
                className="icon"
                onClick={() => {
                  console.log("Closing modal");
                  setCloseModal(false);
                }}
              />
            </button>
            <div className="backdrop"></div>
            {detail.map((item) => {
              {
                return (
                  <div className="productbox" key={item.id}>
                    <div className="img-box">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="detail">
                      <h4>{item.category}</h4>
                      <h2>{item.title}</h2>
                      <h3>{item.price}</h3>
                      {isAddToCart ? (
                        <p>Already Added to 🛒</p>
                      ) : (
                        <button onClick={() => addToCart(item)}>
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
