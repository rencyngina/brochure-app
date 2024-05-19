import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/Components/Navnar";
import Foot from "@/Components/foot";
import Section4 from "@/Components/section4";
// import FloatingChatIcon from "@/Components/FloatingChatIcon";
import { FaExclamationTriangle, FaClipboard } from 'react-icons/fa';

const Articles = () => {
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
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
        setError(null); // Reset error state if successful
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

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

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
        const updatedArticles = articles.filter(
          (article) => article._id !== id
        );
        setArticles(updatedArticles);
      } else {
        console.error("Failed to delete article:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F3F4F6] min-h-screen border-t">
        <div className="container mx-auto lg:py-8 py-4">
          <div className="lg:mt-10 lg:mb-8 p-3 lg:text-center">
            <p className="text-2xl lg:text-3xl  text-yellow-500 font-bold">
              Articles
            </p>
            <h1 className="mt-10 text-3xl lg:text-4xl leading-tight">
              Articles that might help you, In your journey
            </h1>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div class="three-body">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
              </div>
            </div>
          ) : error ? (
            // Display error message if error exists
            <div className="text-center text-red-600 font-bold p-4 bg-red-100 border border-red-400 rounded flex items-center justify-center space-x-2">
              <FaExclamationTriangle className="text-red-600 text-2xl" />
              <span>Network Problem: {error}</span>
            </div>
          ) : articles.length === 0 ? (
            // Display message if no articles exist
            <div className="text-center text-gray-600 font-bold p-4 bg-gray-100 border border-gray-300 rounded flex items-center justify-center space-x-2">
              <FaClipboard className="text-gray-600 text-2xl" />
              <span>No articles found.</span>
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
                      READ MORE
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteArticle(article._id)}
                    className="hidden lg:bg-red-500 lg:text-white lg:py-3 lg:px-5 lg:text-sm lg:mt-2 lg:ml-10"
                  >
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
      </div>
      <Section4 />
      <Foot />
    </>
  );
};

export default Articles;
