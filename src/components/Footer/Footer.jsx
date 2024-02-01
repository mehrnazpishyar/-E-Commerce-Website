import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
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
                <Link href="#">about us</Link>
              </li>
              <li>
                <Link href="#">our services</Link>
              </li>
              <li>
                <Link href="#">privacy policy</Link>
              </li>
              <li>
                <Link href="#">affiliate program</Link>
              </li>
            </ul>
            </div>
          
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">shipping</Link>
              </li>
              <li>
                <Link href="#">returns</Link>
              </li>
              <li>
                <Link href="#">order status</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <Link href="#">watch</Link>
              </li>
              <li>
                <Link href="#">bag</Link>
              </li>
              <li>
                <Link href="#">shoes</Link>
              </li>
              <li>
                <Link href="#">dress</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link href="#">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <GrInstagram />
              </Link>
              <Link href="#">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
