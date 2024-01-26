import { FaSearch } from "react-icons/fa";
import { RiHeartFill, RiShoppingCartFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="tn-container">
          <div className="logo">
            <a href="">Shopping</a>
          </div>
          <div className="search-box">
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search For Products..."
            />
            <div className="search-icon">
              <FaSearch className="srch" />
            </div>
          </div>
          <div className="bn-container">
            <ul className="navlist">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#all">AllProducts</a>
              </li>
              <li>
                <a href="download">Download</a>
              </li>
            </ul>
          </div>
          <div className="tn-icons">
            <a href="" className="fav-icon">
              <RiHeartFill /> <span className="count">0</span>
            </a>
            <a href="" className="cart-icon">
              <RiShoppingCartFill />
              <span className="count">0</span>
            </a>
          </div>
          <div className="hamburger-menu">
            <GiHamburgerMenu />
          </div>
        </div>
        <hr />
      </nav>
    </header>
  );
};

export default Navbar;
