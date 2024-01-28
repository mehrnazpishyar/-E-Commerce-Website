import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const PriceFilter = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Filter by price
        <span>
          <IoMdArrowDropdown />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">All</div>
          <div className="dropdown-item">$0-50</div>
          <div className="dropdown-item">$50-100</div>
          <div className="dropdown-item">Over $100</div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
