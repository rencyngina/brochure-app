import React from "react";
import Image from "next/image";
import Link from "next/link";
import "react-quill/dist/quill.snow.css"; // Ensure React Quill's CSS is included

const ArticleContent = ({ article }) => {
  if (!article) {
    return <p className="text-center">Oops article not found</p>;
  }

  const { title, image, content } = article;

  console.log("Article content:", content);

  return (
    <div className="max-w-5xl mx-auto px-4">
      {image && (
        <div className="mt-4">
          <Image
            src={image}
            alt={title}
            width={700}
            height={200}
            className="rounded-sm"
            loading="lazy"
          />
        </div>
      )}
      {title && (
        <h1 className="text-2xl lg:text-5xl font-bold mt-4 overflow-hidden text-ellipsis line-clamp-3 break-words">
          {title}
        </h1>
      )}
      {content && (
        <div
          className="text-black mt-4 lg:text-lg text-sm article-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default ArticleContent;
