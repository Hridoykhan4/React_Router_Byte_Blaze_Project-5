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
  /* 
    {
    "type_of": "article",
    "id": 2338488,
    "title": "Python Cheats for Bypassing CAPTCHAs in 2025",
    "description": "“If you’re tired of your automation projects being stalled by endless CAPTCHA challenges, it’s time...",
    "readable_publish_date": "Mar 17",
    "slug": "python-cheats-for-bypassing-captchas-in-2025-47og",
    "path": "/snappytuts/python-cheats-for-bypassing-captchas-in-2025-47og",
    "url": "https://dev.to/snappytuts/python-cheats-for-bypassing-captchas-in-2025-47og",
    "comments_count": 2,
    "public_reactions_count": 65,
    "collection_id": null,
    "published_timestamp": "2025-03-17T18:06:04Z",
    "language": "en",
    "subforem_id": 1,
    "positive_reactions_count": 65,
    "cover_image": null,
    "social_image": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F341u908g61t5idaakrl2.png",
    "canonical_url": "https://dev.to/snappytuts/python-cheats-for-bypassing-captchas-in-2025-47og",
    "created_at": "2025-03-17T18:06:05Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2025-03-17T18:06:04Z",
    "last_comment_at": "2025-03-18T08:28:03Z",
    "reading_time_minutes": 6,
    "tag_list": [
        "programming",
        "beginners",
        "python",
        "ai"
    ],
    "tags": "programming, beginners, python, ai",
    "user": {
        "name": "Snappy Tuts",
        "username": "snappytuts",
        "twitter_username": "SnappyTuts",
        "github_username": null,
        "user_id": 1262385,
        "website_url": null,
        "profile_image": "https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1262385%2F0da1ac70-1551-4843-aef8-f45b09dd27f9.jpg",
        "profile_image_90": "https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1262385%2F0da1ac70-1551-4843-aef8-f45b09dd27f9.jpg"
    }
}
    */
  return (
    <Link
      to={`/${id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm p-3 mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50"
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
        <p>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
