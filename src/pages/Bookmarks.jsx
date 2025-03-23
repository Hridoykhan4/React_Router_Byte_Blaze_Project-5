import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../components/utils/local";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedItems = getBlogs();
    setBlogs(storedItems);
  };

  useEffect(() => {
    const storedItems = getBlogs();
    setBlogs(storedItems);
  }, []);

  if (blogs.length < 1)
    return <EmptyState address={'/blogs'} label="Go to Blogs" message={"No Bookmarks Found"}></EmptyState>;
  return (
    <div>
      {
        <div className="grid px-4 sm:px-8 lg:px-12 py-6 overflow-hidden justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              handleDelete={handleDelete}
              deletable={true}
              key={blog.id}
              blog={blog}
            ></BlogCard>
          ))}
        </div>
      }
    </div>
  );
};

export default Bookmarks;
