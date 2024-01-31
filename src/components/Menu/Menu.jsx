import { Link } from "react-router-dom"


const Menu = () => {
  return (
    <div className="bn-container">
    <ul className="navlist">
      <li>
        <Link to="/" className="fav-icon">
          Home
        </Link>
      </li>
      <li>
      <Link to="/all" className="fav-icon">
          All Product
        </Link>
      </li>
      <li>
      <Link to="/download" className="fav-icon">
        Download
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Menu