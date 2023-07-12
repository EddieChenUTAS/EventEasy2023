import logo from "./images/EventEasyLogo.png"; // Tell Webpack this JS file uses this image

export default function Navbar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="site-logo" className="site-logo"></img>
      <ul>
        <li>
<<<<<<< HEAD
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Book an Event</a>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> eca9183c1e1c0b57a3919103503993931cb08734
<<<<<<< HEAD:src/layout/navbar/index.js
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookEvent">Book an Event</Link>
=======
          <a href="#">Home</a>
<<<<<<< HEAD
=======
        </li>
        <li>
          <a href="#">Book an Event</a>
>>>>>>> parent of 5b39503 (updated navbar):src/Navbar.js
>>>>>>> eca9183c1e1c0b57a3919103503993931cb08734
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
>>>>>>> parent of 84cd876 (refactor the repo structure)
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
