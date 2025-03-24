import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const {
    title,
    cover_image: image,
    body_html,
    tags,
    social_image,
    url,
  } = blog;
  return (
    <div
      href="#"
      className="mx-auto overflow-hidden transition border-2 p-2  border-opacity-30   group hover:no-underline focus:no-underline"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44"
        src={image || social_image}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed">
        {tags.map((tag, i) => (
          <a
            key={i}
            rel="noopener noreferrer"
            href=""
            className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 "
          >
            # {tag}
          </a>
        ))}
      </div>

      <div className="space-y-2 ">
        <a
          href={url}
          target="_blank"
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >
          {title}
        </a>

        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
