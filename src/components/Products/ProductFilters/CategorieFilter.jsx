import { useState } from "react";

const CategorieFilter = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <select
        className="dropdown-btn"
        value={selectedCategory}
        onChange={handleSelectChange}
        onClick={() => setIsActive(!isActive)}
      >
        <option value="All">All</option>
        <option value="Women">Women</option>
        <option value="Men">Men</option>
        <option value="Jewellery">Jewellery</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
};

export default CategorieFilter;
