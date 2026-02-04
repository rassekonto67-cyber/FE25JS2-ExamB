import { Link } from 'react-router-dom'
// import "./Navigation.css"
import logo from "../assets/logoipsum-custom-logo.svg"

function Navigation() {
  return (
    <nav>
      <img className="logo" src={logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/clothes">Clothes</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
