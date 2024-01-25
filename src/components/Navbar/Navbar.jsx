import "./Navbar.css";

import { FaSearch } from "react-icons/fa";
import {
  RiHeartFill,
  RiShoppingCartFill,
} from "react-icons/ri";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="tn-container container">
          <a href="" className="logo">
            Shopping
          </a>
          <div className="search-box">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search For Products..."
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>
          <div className="tn-icons">
            <a href="" className="fav-icon">
              <RiHeartFill /> <span className="count">0</span>
            </a>
            <a href="" className="cart-icon">
              <RiShoppingCartFill /><span className="count">0</span>
            </a>
          </div>
        </div>
        <hr />
        <div className="bn-container container">
          <ul className="navlist">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#all">AllProducts</a>
            </li>
            <li>
              <a href="Download">Download</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
