import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const PriceFilter = () => {
  const { sortProductsByPrice } = useContext(AppContext);

  return (
    <div className="price-filter">
      <h4 className="title-filter">Filter By Price :</h4>
    
        <select
          data-bs-theme="light"
          aria-label=".form-select-sm"
          name="price"
          id="test-price"
          onChange={(e) => sortProductsByPrice(e)}
        >
          <option className="select-items" value="LowToHigh">
            Low To High Price
          </option>
          <option className="select-items" value="HighToLow">
            High To Low Price
          </option>
        </select>
     
    </div>
  );
};

export default PriceFilter;
