import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const {
    title,
    cover_image: image,
    description,
    published_at,
    id,
    social_image,
  } = blog;

  return (
    <Link
      to={`/blog/${id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm p-3 mx-auto ease-in-out duration-500 group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
        src={image || social_image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400 dark:text-gray-600">
          {new Date(published_at).toLocaleDateString("en-GB")}
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
