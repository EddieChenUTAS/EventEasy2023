import Navbar from "./navbar";
import Footer from "./footer";
import routes from "@/route";
import { Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};


export default Layout