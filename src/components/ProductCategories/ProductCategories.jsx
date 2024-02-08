import { categoryData } from "../../constants";
import CategoriesCard from "./CategoriesCard";


const ProductCategories = () => {
  return (
    <div className="categories">
      <div className="title">
        <h1>Categories</h1>
      </div>
      <div className="categories-container">
        {categoryData.map((category) => (
          <CategoriesCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
