import { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import { saveBlog } from "../components/utils/local";

const Blog = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigation = useNavigation();
  const blog = useLoaderData();
  const {
    title,
    comments_count,
    public_reactions_count,
    reading_time_minutes,
    published_at,
  } = blog;
  if (navigation.state === "Loading") return <Loader></Loader>;

  const handleBookMark = (blog) => {
    saveBlog(blog);
  };

  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
        <div className="space-y-6">
          <a className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </a>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
            <p className="text-sm">
              {reading_time_minutes} min read •{" "}
              {new Date(published_at).toLocaleDateString("en-GB")}
            </p>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>
        </div>
        <div className="text-gray-100 dark:text-gray-800">
          <p>Insert the actual text content here...</p>
        </div>
      </article>

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
        <Link
          // to=""

          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center ${
            tabIndex === 0
              ? "border bg-green-900 font-semibold text-white h-full  border-b-0"
              : "border-b"
          } flex-shrink-0 px-5 py-3 space-x-2 `}
        >
          <span>Content</span>
        </Link>
        <Link
          to="author"
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center ${
            tabIndex === 1
              ? "border bg-green-900 font-semibold text-white h-full  border-b-0"
              : "border-b"
          } flex-shrink-0 px-5 py-3 space-x-2 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Author</span>
        </Link>

        <div
          onClick={() => handleBookMark(blog)}
          className="bg-primary p-3 ml-5 hover:scale-105 overflow-hidden cursor-pointer rounded-full btn h-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Blog;
