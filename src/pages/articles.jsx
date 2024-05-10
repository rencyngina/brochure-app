import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/Components/Navnar";
import Foot from "@/Components/foot";
import Section4 from "@/Components/section4";

const Articles = () => {
  const [loading, setLoading] = useState(true); // State variable to track loading state
  const [email, setEmail] = useState("");
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);

  useEffect(() => {
    // Fetch articles data from API or use mock data
    const fetchArticles = async () => {
      try {
        setLoading(true); // Set loading to true when fetching data
        const response = await fetch("/api/articles");
        const data = await response.json();
        setArticles(data.articles); // Assuming your API returns an array of articles
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchArticles();

    //Fetch articles after every 5 minutes
    const fetchInterval = setInterval(fetchArticles, 5 * 60 * 1000);

    //Clean up function to clear the interval when component unmounts
    return () => clearInterval(fetchInterval);
  }, []); // Fetch articles data only once on component mount

  useEffect(() => {
    // Sort articles by date in descending order
    const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Take the first 3 articles
    const latestArticles = sortedArticles.slice(0, 100);

    // Mark articles as new if they are published within the last 3 days
    const currentDate = new Date();
    const threeDaysAgo = new Date(currentDate);
    threeDaysAgo.setDate(currentDate.getDate() - 3);

    const displayedArticles = latestArticles.map(article => ({
      ...article,
      isNew: new Date(article.date) >= threeDaysAgo,
    }));

    setDisplayedArticles(displayedArticles);
  }, [articles]); // Update displayed articles when the articles state changes

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  // Function to truncate content to a specified number of words
  const truncateContent = (content, numWords) => {
    const words = content.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    } else {
      return content;
    }
  };

  return (
    <>
    <Navbar />
    <div className="bg-[#F3F4F6] min-h-screen border-t">
      {/* Your newsletter subscription form */}
      
      <div className="container mx-auto lg:py-8 py-4">
        <div className="lg:mt-10 lg:mb-8 p-3 lg:text-center">
          <p className="text-2xl lg:text-3xl  text-yellow-500 font-bold">
            Articles
          </p>
          <h1 className="mt-10 text-3xl lg:text-4xl leading-tight">
            Articles that might
            help you, In your journey
          </h1>
        </div>
        {loading ? ( // Display spinner if loading
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {displayedArticles.map((article, index) => (
              <div key={index} className="bg-white shadow-lg p-4 hover:border-2 border-yellow-500">
                <Image
                  src={article.image}
                  alt={`pic${index}`}
                  className="w-full h-48 object-cover"
                  layout="responsive"
                  width={80}
                  height={40}
                />
                <h2 className="text-lg font-semibold text-gray-800 mt-4">{article.title}</h2>
                <p className="text-gray-500 mt-2" dangerouslySetInnerHTML={{ __html: truncateContent(article.content, 20) }}></p>
                <Link href={`/article/${article._id}`}>
                <button className="bg-[#03234D] hover:bg-yellow-500 text-white  py-3 px-4 mt-4">
                  READ MORE
                </button>
                </Link>
                {article.isNew && <span className="bg-yellow-500 text-white py-1 px-2 rounded-full text-sm">New</span>}
              </div>
            ))}
          </div>
        )}
        <button className="bg-[#03234D] hover:bg-blue-700 text-white lg:font-bold lg:py-4 lg:px-6 py-3 px-6 mt-10 lg:ml-0 ml-4">
          LOAD MORE ARTICLES
        </button>
      </div>
    </div>
    <Section4 />
    <Foot />
    </>
  );
};

export default Articles;
