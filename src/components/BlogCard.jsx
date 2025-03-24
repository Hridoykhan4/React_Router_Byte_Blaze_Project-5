import { Link } from "react-router-dom";
import dIcon from "../assets/deleteIcon.png";

const BlogCard = ({ blog, deletable, handleDelete }) => {
  const {
    title,
    cover_image: image,
    description,
    published_at,
    id,
    social_image,
  } = blog;

  return (
    <div className="relative mr-5 border p-3  rounded-lg">
      <Link
        to={`/blog/${id}`}
        href="#"
        className="max-w-sm  p-3 mx-auto ease-in-out duration-500 group transition  hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={image || social_image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs ">
            {new Date(published_at).toLocaleDateString("en-GB")}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute bg-primary  rounded-full top-0 w-12 cursor-pointer -right-2"
        >
          <img src={dIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
