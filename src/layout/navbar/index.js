import logo from "@/assets/EventEasyLogo.png"; // Tell Webpack this JS file uses this image
import "./index.css"

export default function Navbar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="site-logo" className="site-logo"></img>
      <ul>
        <li>
<<<<<<< HEAD
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
=======
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/bookevent">Book an Event</a>
>>>>>>> parent of 131a276 (add book event page)
        </li>
        <li>
          <a href="#">Past Events</a>
        </li>
      </ul>
      <a href="#" className="login">
        Login
      </a>
    </nav>
  );
}
