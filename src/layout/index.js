import "./index.js";

import Navbar from "./navbar";
import Footer from "./footer";
import routes from "@/route";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
      </Routes>
      <Footer />
    </Box>
  );
};

export default Layout;
