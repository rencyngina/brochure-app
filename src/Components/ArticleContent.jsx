import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArticleContent = ({ article }) => {
  // Check if article is null or undefined
  if (!article) {
    return <p className="text-center">Oops article not found</p>;
  }

  // Destructure article object to access its properties safely
  const { title, image, content } = article;

  // Log the content to check its structure
  console.log("Article content:", content);

  // Create a preview container to preview the content

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Render image if it exists */}
      {image && (
        <div className="mt-4">
          <Image
            src={image}
            alt={title}
            width={700}
            height={200}
            className="rounded-sm"
          />
        </div>
      )}
      {title && (
        <h1 className="text-3xl lg:text-5xl font-bold mt-4 overflow-hidden overflow-ellipsis"
          style={{ WebkitLineClamp: 2, display: "-webkit-box", WebkitBoxOrient: "vertical" }}
        >
          {title}
        </h1>
      )}
      {content && (
        <div
          className="text-gray-700 mt-4 lg:text-lg text-md"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default ArticleContent;


