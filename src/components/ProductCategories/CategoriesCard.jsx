

const CategoriesCard = ({imgURL, title}) => {
  return (
    <div className="categories-card">
      <div className="img-box">
      <img src={imgURL} alt="product" />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default CategoriesCard;
