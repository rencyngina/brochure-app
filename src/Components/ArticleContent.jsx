import Image from "next/image";
import Link from 'next/link';

const ArticleContent = ({ article }) => {
  // Check if article is null or undefined
  if (!article) {
    return <p className="text-center">Oops article found</p>;
  }

  // Destructure article object to access its properties safely
  const { title, image, content } = article;

  return (
    <div className="max-w-7xl mx-auto px-4">
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
      {title && <h1 className="text-3xl font-bold mt-4">{title}</h1>}

      {/* Render content if it exists */}
      {content && <p className="text-gray-700 mt-4">{content}</p>}

      {/* Navigation buttons */}
      <div className="lg:flex flex-col md:flex-row lg:gap-4 gap-6 mt-4">
        <Link href='/'>
          <button className="bg-[#03234D] hover:bg-yellow-500 text-white py-2 px-6 md:py-4 md:px-10">
            HOME
          </button>
        </Link>
        <Link href='/articles'>
          <button className="bg-[#03234D] hover:bg-yellow-500 text-white py-2 px-6 md:py-4 md:px-10">
            MORE ARTICLES
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleContent;

