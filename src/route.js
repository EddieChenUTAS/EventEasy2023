import Homepage from "@/pages/home";
import NotFound from "@/pages/notFound";
import BookEvent from "@/pages/bookEvent";
import Login from "./pages/login";

const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/home",
    component: Homepage,
  },
  {
    path: "/bookEvent",
    component: BookEvent,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
