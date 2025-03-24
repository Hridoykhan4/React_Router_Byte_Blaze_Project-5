import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Blog from "../pages/Blog";
import Author from "../components/Author";
import Content from "../components/Content";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
          path: "/blog/:id",
          loader: ({ params }) =>
            fetch(`https://dev.to/api/articles/${params.id}`),
          element: <Blog />,
          children: [
            {
                index: true,
                loader: ({ params }) =>
                fetch(`https://dev.to/api/articles/${params.id}`),
                element: <Content/>
            },
            {
                path: "author",
                loader: ({ params }) =>
                fetch(`https://dev.to/api/articles/${params.id}`),
                element: <Author/>
            },
          ]
        },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
