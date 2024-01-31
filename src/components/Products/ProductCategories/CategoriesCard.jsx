

const CategoriesCard = ({imgURL, title}) => {
  return (
    <div className="categories-card">
      <div className="img-box">
      <img src={imgURL} alt="product" />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default CategoriesCard;
