import { Link } from "react-router-dom";

const CategoriesCard = ({ imgURL, title, url }) => {
  return (
    <div className="categories-card">
      <Link to={`/categories/${url}`}>
        <div className="img-box">
          <img src={imgURL} alt="product" />
        </div>
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default CategoriesCard;
