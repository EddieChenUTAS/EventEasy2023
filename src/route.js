import Homepage from "@/pages/home";
import NotFound from "@/pages/notFound";

const routes = [
    {
      path: "/",
      component: Homepage
    },
    {
      path: '/home',
      component: Homepage,
    },
    {
      path: '*',
      component: NotFound
    }
  ];

export default routes;