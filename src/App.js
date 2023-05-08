import "./Homepage.css";
import "./navbar.css";
import "./footer.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import Homepage from "./Homepage";
import BookEvent from "./pages/BookEvent";
import Login from "./pages/Login";

function App() {
  console.log(window.location.pathname);
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Homepage />;
      break;
    case "/bookevent":
      component = <BookEvent />;
      break;
    case "/login":
      component = <Login />;
  }

  return (
    <div>
      <Navbar />
      {component}

      <Footer />
    </div>
  );
}

export default App;
