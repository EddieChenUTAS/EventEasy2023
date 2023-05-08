import logo from "./images/EventEasyLogo.png"; // Tell Webpack this JS file uses this image

export default function Navbar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="site-logo" className="site-logo"></img>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/bookevent">Book an Event</a>
        </li>
        <li>
          <a href="#">Past Events</a>
        </li>
      </ul>
      <a href="/login" className="login">
        Login
      </a>
    </nav>
  );
}
