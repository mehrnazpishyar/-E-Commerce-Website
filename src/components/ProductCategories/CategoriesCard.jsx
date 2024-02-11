import { Link } from "react-router-dom";

const CategoriesCard = ({ title, url }) => {
  return (
    <div className="categories-card">
      <Link to={`/categories/${url}`}>
        <div className="img-box">
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesCard;
