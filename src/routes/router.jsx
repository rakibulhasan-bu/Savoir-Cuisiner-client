import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ChefRecipes from "../pages/ChefRecipes";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: () =>
          fetch(
            "https://savoir-cuisiner-server-rakibulhasan-bu.vercel.app/blog"
          ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivetRoute>
            <ChefRecipes />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://savoir-cuisiner-server-rakibulhasan-bu.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
