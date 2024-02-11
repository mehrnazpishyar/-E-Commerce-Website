import { FaFacebookF,FaYoutube,FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <div>
            <ul>
              <li>
                <Link to="#">about us</Link>
              </li>
              <li>
                <Link to="#">our services</Link>
              </li>
              <li>
                <Link to="#">privacy policy</Link>
              </li>
              <li>
                <Link to="#">affiliate program</Link>
              </li>
            </ul>
            </div>
          
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">shipping</Link>
              </li>
              <li>
                <Link to="#">returns</Link>
              </li>
              <li>
                <Link to="#">order status</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <Link to="/categories/man">Men</Link>
              </li>
              <li>
                <Link to="/categories/woman">Women</Link>
              </li>
              <li>
                <Link to="/categories/jewellery">Jewellery</Link>
              </li>
              <li>
                <Link to="/categories/electronics">Electronics</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link to="#">
                <FaFacebookF />
              </Link>
              <Link to="#">
                <GrInstagram />
              </Link>
              <Link to="#">
                <FaTwitter />
              </Link>
              <Link to="#">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
