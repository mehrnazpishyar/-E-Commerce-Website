import { FaSearch } from "react-icons/fa";
import { RiHeartFill, RiShoppingCartFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogin, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const { query, setQuery, favorite, cart } = useContext(AppContext);


  return (
    <header>
      <nav>
        <div className="tn-container">
          <div className="logo">
            <a href="">Shopping</a>
          </div>
          <div className="search-box">
            <input
              type="text"
              className="text-field"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search For Products..."
            />
            <div className="search-icon">
              <FaSearch className="srch" />
            </div>
          </div>
          <Menu />
          <div className="tn-icons">
            <Link to="/favorite" className="fav-icon favorite">
              <RiHeartFill /> <span className="count">{favorite.length}</span>
              <span className="tooltiptext">favorite</span>
            </Link>
            <Link to="/cart" className="fav-icon cart">
              <RiShoppingCartFill /> <span className="count">{cart.length}</span>
              <span className="tooltiptext">cart</span>
            </Link>

            {isAuthenticated ? (
              <Link
                to="/user"
                className="cart-icon logout"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <MdLogout />
                <span className="tooltiptext">logout</span>
              </Link>
            ) : (
              <Link
                to="/user"
                className="cart-icon login"
                onClick={() => loginWithRedirect()}
              >
                <MdOutlineLogin />
                <span className="tooltiptext">login</span>
              </Link>
            )}
            {isAuthenticated && (
              <div className="cart-user">
                <span className="user">Hello, {user.name}</span>
              </div>
            )}
          </div>
          <div className="hamburger-menu">
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
