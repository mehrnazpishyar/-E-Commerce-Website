
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

const CategorieFilter = () => {

  const { sort, setSort } = useContext(AppContext);

  const handleSelectChange = (e) => {
    setSort(e.target.value);

  };

  return (
    <div className="dropdown">
      <select
        className="dropdown-btn"
        value={sort}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        <option value="latest">Latest</option>
        <option value="earliest">Earliest</option>
      </select>
    </div>
  );
};

export default CategorieFilter;
