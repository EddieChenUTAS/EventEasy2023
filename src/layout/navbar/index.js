import logo from "@/assets/EventEasyLogo.png"; // Tell Webpack this JS file uses this image
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="site-logo" className="site-logo"></img>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookEvent">Book an Event</Link>
        </li>
        <li>
          <Link href="#">Past Events</Link>
        </li>
      </ul>
      <a href="/login" className="login">
        Login
      </a>
    </nav>
  );
}
