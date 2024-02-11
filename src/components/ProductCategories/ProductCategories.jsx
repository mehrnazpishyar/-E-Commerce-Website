import { Link } from "react-router-dom";
import CategoriesCard from "./CategoriesCard";
import { categoryData } from "../../constants";

const ProductCategories = () => {
  return (
    <div className="categories">
      <div className="title">
        <h1>Categories</h1>
      </div>
      <div className="categories-container">
        {categoryData.map((category) => (
          <Link key={category.title} to={`/categories/${category.url}`}>
            <CategoriesCard {...category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
