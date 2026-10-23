import Image from "next/image";
import type { StaticImageData } from "next/image";

export type ForumPostData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
};

type ForumPostProps = {
  post: ForumPostData;
};

export default function ForumPost({ post }: ForumPostProps) {
  return (
    <article className="forum-post">
      <Image
        className="forum-post-image"
        src={post.imageSrc}
        alt={post.imageAlt}
        width={300}
        height={200}
      />
      <div className="forum-post-content">
        <h2 className="forum-post-title">{post.title}</h2>
        <p className="forum-post-description">{post.description}</p>
      </div>
    </article>
  );
}
