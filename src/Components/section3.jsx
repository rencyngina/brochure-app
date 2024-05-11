/* eslint-disable react/no-unescaped-entities */
"use_client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
  const [email, setEmail] = useState("");
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [error, setError] = useState(null); // State variable to track errors
  const [loading, setLoading] = useState(true); // State variable to track loading state

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
        setError(null); // Reset error state if successful
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError(error.message); // Set error message in case of error
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchArticles();

    const fetchInterval = setInterval(fetchArticles, 5 * 60 * 1000);
    return () => clearInterval(fetchInterval);
  }, []);

  useEffect(() => {
    const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestArticles = sortedArticles.slice(0, 3);
    const currentDate = new Date();
    const threeDaysAgo = new Date(currentDate);
    threeDaysAgo.setDate(currentDate.getDate() - 3);

    const displayedArticles = latestArticles.map(article => ({
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

  return (
    <div className="bg-[#F3F4F6] min-h-screen border-t">
      <div className="container mx-auto lg:py-8 py-4">
        <div className="lg:mt-10 lg:mb-8 p-3">
          <p className="text-2xl lg:text-3xl text-yellow-500 font-bold">
            Articles
          </p>
          <h1 className="mt-10 text-3xl lg:text-4xl leading-tight">
            Articles that might
            <br />
            help your journey
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 font-bold">
              Network Problem: {error}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center text-gray-600 font-bold">
              No articles found.
            </div>
          ) : (
            displayedArticles.map((article, index) => (
              <div key={index} className="bg-white shadow-lg p-4 hover:border-2 border-yellow-500">
                <Image
                  src={article.image}
                  alt={`pic${index}`}
                  className="w-full h-48 object-cover"
                  layout="responsive"
                  width={80}
                  height={40}
                />
                <h2 className="text-xl font-semibold text-gray-800 mt-4">{article.title}</h2>
                <p className="text-gray-500 mt-2 text-lg" dangerouslySetInnerHTML={{ __html: truncateContent(article.content, 20) }}></p>
                <Link href={`/article/${article._id}`}>
                  <button className="bg-[#03234D] hover:bg-yellow-500 text-white  py-3 px-4 mt-4">
                    READ MORE
                  </button>
                </Link>
                {article.isNew && <span className="bg-yellow-500 text-white py-1 px-2 rounded-full text-sm">New</span>}
              </div>
            ))
          )}
        </div>
        <Link href="/articles">
          <button className="bg-[#03234D] hover:bg-blue-700 text-white lg:font-bold lg:py-4 lg:px-6 py-3 px-6 mt-10 lg:ml-0 ml-4">
            SEE MORE ARTICLES
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section3;
