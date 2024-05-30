import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Article = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [error, setError] = useState(null); // State variable to track errors

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/articles");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
        setError(null); // Reseting error state if successful
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
        setError(error.message); // Set error message in case of error
      }
    };

    fetchArticles();

    const fetchInterval = setInterval(fetchArticles, 5 * 60 * 1000);
    return () => clearInterval(fetchInterval);
  }, []);

  useEffect(() => {
    const sortedArticles = [...articles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const latestArticles = sortedArticles.slice(0, 100);

    const currentDate = new Date();
    const threeDaysAgo = new Date(currentDate);
    threeDaysAgo.setDate(currentDate.getDate() - 3);

    const displayedArticles = latestArticles.map((article) => ({
      ...article,
      isNew: new Date(article.date) >= threeDaysAgo,
    }));

    setDisplayedArticles(displayedArticles);
  }, [articles]);


  const truncateContent = (content, numWords) => {
    const words = content.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    } else {
      return content;
    }
  };

// delete Artical
const deleteArticle = async (id) => {
  try {
    const response = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const updatedArticles = articles.filter((article) => article._id !== id);
      setArticles(updatedArticles);
    } else {
      console.error("Failed to delete article:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting article:", error);
  }
};
  return (
    <div className="mt-8 text-white z-50">
    {loading ? (
            <div className="flex justify-center items-center h-40">
              <div class="three-body">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
              </div>
            </div>
          ) : error ? ( // Display error message if error exists
            <div className="text-center text-red-600 font-bold">
              Network Problem: {error}
            </div>
          ) : articles.length === 0 ? ( // Display message if no articles exist
            <div className="text-center text-gray-600 font-bold">
              No articles found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {displayedArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-4 hover:border-2 border-yellow-500"
                >
                  <Image
                    src={article.image}
                    alt={`pic${index}`}
                    className="w-full h-48 object-cover"
                    layout="responsive"
                    width={80}
                    height={40}
                    loading="lazy"
                  />
                  <h2 className="text-lg font-semibold text-gray-800 mt-4">
                    {article.title}
                  </h2>
                  <p
                    className="text-gray-500 mt-2"
                    dangerouslySetInnerHTML={{
                      __html: truncateContent(article.content, 20),
                    }}
                  ></p>
                  <Link href={`/article/${article._id}`}>
                    <button className="bg-[#03234D] hover:bg-yellow-500 text-white  py-3 px-4 mt-4">
                      READ
                    </button>
                  </Link>
                  <button onClick={() => deleteArticle(article._id)} className="lg:bg-red-500 lg:text-white lg:py-3 lg:px-5 lg:text-sm lg:mt-2 lg:ml-8">
                    Delete
                  </button>
                  {article.isNew && (
                    <span className="bg-yellow-500 text-white py-1 px-2 rounded-full text-sm">
                      New
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
    </div>
  );
}

export default Article;
