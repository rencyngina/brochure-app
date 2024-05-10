import React from "react";
import Image from "next/image";

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
  const contentPreview = (
    <div className="content-preview" dangerouslySetInnerHTML={{ __html: content }} />
  );

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Render image if it exists */}
      {image && (
        <div className="mt-4">
          <Image
            src={image}
            alt={title}
            width={700}
            height={400}
            className="rounded-sm lg:w-full h-96 object-cover"
          />
        </div>
      )}

      {/* Render title if it exists */}
      {title && (
        <h1 className="text-3xl lg:text-5xl font-bold mt-4 overflow-hidden overflow-ellipsis">
          {title}
        </h1>
      )}

      {/* Render content preview */}

      {/* Render content if it exists */}
      {content && (
        <div
          className="text-gray-700 mt-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {/* Navigation buttons */}
      <div className="lg:flex flex-col md:flex-row lg:gap-4 gap-6 mt-4">
        <a href="/" className="btn-primary">
          HOME
        </a>
        <a href="/articles" className="btn-primary">
          MORE ARTICLES
        </a>
      </div>
    </div>
  );
};

export default ArticleContent;


