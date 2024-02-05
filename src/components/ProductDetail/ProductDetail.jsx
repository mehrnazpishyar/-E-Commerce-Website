import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ProductDetail = () => {
  const { detail, closeModal, setCloseModal } = useContext(AppContext);

  return (
    <>
      {closeModal && (
        <div className="product-detail">
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
                      <button>Add To Cart</button>
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
