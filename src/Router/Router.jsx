import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BlogPage from "../Pages/Blogs/BlogPage";
import BlogDetails from "../Pages/Blogs/BlogDetails";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },

      // ✅ Blogs routes
      { path: "/blogs", element: <BlogPage /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
    ],
  },
]);

export default Router;
