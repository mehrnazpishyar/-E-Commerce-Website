import Select from "react-select";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const CategorieFilter = () => {
  const { allProducts, selectedCategory, setSelectedCategory } =
    useContext(AppContext);

  const categories = Array.from(
    new Set(allProducts.map((res) => res.category))
  );

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const customStyles = {
    // Style for the container surrounding the select input
    container: (provided) => ({
      ...provided,
      width: "270px",
      border:"1px solid #ccc",
      borderRadius:"5px",
    }),
  };

  return (
    <div className="category-filter">
      <h4 className="title-filter">Filter By Category :</h4>
      <Select
        options={categoryOptions}
        styles={customStyles}
        isClearable
        placeholder="Select a category"
        onChange={(selectOption) => setSelectedCategory(selectOption)}
        value={selectedCategory}
      />
    </div>
  );
};

export default CategorieFilter;
