import Homepage from "@/pages/home";
import NotFound from "@/pages/notFound";
import BookEvent from '@/pages/bookEvent'

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
    path: "*",
    component: NotFound,
  },
];

export default routes;
