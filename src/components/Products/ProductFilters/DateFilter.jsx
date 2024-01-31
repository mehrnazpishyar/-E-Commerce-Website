import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CategorieFilter = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Filter by Date
        <span>
          <IoMdArrowDropdown />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">Latest</div>
          <div className="dropdown-item">Earliest</div>
        </div>
      )}
    </div>
  );
};

export default CategorieFilter;
