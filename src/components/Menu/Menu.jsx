import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Menu = () => {
    const [isMobile, setIsMobile]=useState(false)
  return (
    <div className="menu">
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={()=> setIsMobile(false)}>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
      <Link to="/all">
          All Product
        </Link>
      </li>
      <li>
      <Link to="/download">
        Download
        </Link>
      </li>
      </ul>
      <button className="mobile-menu-icon" onClick={()=> setIsMobile(!isMobile)}>
        {isMobile ? <div><MdOutlineClose className="close-menu"/></div> : <div ><GiHamburgerMenu className="hamburger-menu "/></div>}
      </button>
    </div>
  );
};

export default Menu;
