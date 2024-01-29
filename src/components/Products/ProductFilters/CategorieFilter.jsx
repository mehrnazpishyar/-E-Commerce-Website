import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CategorieFilter = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Filter by Category
        <span>
          <IoMdArrowDropdown />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">All</div>
          <div className="dropdown-item">Women</div>
          <div className="dropdown-item">Men</div>
          <div className="dropdown-item">Jewellery</div>
          <div className="dropdown-item">Electronics</div>
        </div>
      )}
    </div>
  );
};

export default CategorieFilter;
