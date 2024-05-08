/* eslint-disable react/no-unescaped-entities */
"use_client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Section3 = () => {
  const [email, setEmail] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles data from API or use mock data
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles");
        const data = await response.json();
        setArticles(data.articles); // Assuming your API returns an array of articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []); // Fetch articles data only once on component mount

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* Your newsletter subscription form */}
      
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
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-lg p-4 hover:border-2 border-yellow-500">
              <Image
                src={article.image}
                alt={`pic${index}`}
                className="w-full h-48 object-cover"
                width={80}
                height={40}
              />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">{article.title}</h2>
              <p className="text-gray-500 mt-2">{article.content}</p>
              <button className="bg-[#03234D] hover:bg-yellow-500 text-white  py-3 px-4 mt-10">
                READ MORE
              </button>
            </div>
          ))}
        </div>
        <button className="bg-[#03234D] hover:bg-blue-700 text-white lg:font-bold lg:py-4 lg:px-6 py-3 px-6 mt-10 lg:ml-0 ml-4">
          SEE MORE ARTICLES
        </button>
      </div>
    </div>
  );
};

export default Section3;
