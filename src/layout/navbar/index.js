import logo from "@/assets/EventEasyLogo.png"; // Tell Webpack this JS file uses this image
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="site-logo" className="site-logo"></img>
      <ul>
        <li>
<<<<<<< HEAD:src/layout/navbar/index.js
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookEvent">Book an Event</Link>
=======
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Book an Event</a>
>>>>>>> parent of 5b39503 (updated navbar):src/Navbar.js
        </li>
        <li>
          <Link href="#">Past Events</Link>
        </li>
      </ul>
      <a href="#" className="login">
        Login
      </a>
    </nav>
  );
}
