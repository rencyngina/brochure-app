import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleContent from "../../Components/ArticleContent"; // Create this component to display article content
import Navbar from "../../Components/Navnar";
import Foot from "@/Components/foot";

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  // Fetch all articles once when the component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles'); // Fetch all articles
        const data = await response.json();
        setArticles(data.articles); // Assuming the response has a property 'articles' which is an array of articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Fetch the specific article when the 'id' changes
  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/${id}`); // Fetch the specific article
          const data = await response.json();
          setArticle(data.data); // Assuming article data is nested under 'data' property
          console.log("Article data:", data);
        } catch (error) {
          console.error("Error fetching article:", error);
        }
      }
    };

    fetchArticle();
  }, [id]);

  // Update the current index when the articles list or 'id' changes
  useEffect(() => {
    if (id && articles.length > 0) {
      // Find the current index of the article in the articles array
      const index = articles.findIndex(article => article._id === id);
      setCurrentIndex(index);
    }
  }, [id, articles]);

  const handleNext = () => {
    if (currentIndex < articles.length - 1) {
      const nextArticleId = articles[currentIndex + 1]._id;
      router.push(`/article/${nextArticleId}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const previousArticleId = articles[currentIndex - 1]._id;
      router.push(`/article/${previousArticleId}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-auto lg:h-auto">
      <div className="lg:container mx-auto lg:py-8 flex flex-col items-center lg:px-4 md:px-8">
        {article ? (
          <>
            <ArticleContent article={article} />
            <div className="mt-8 flex justify-between w-full lg:max-w-4xl lg:mr-24 mr-0 p-4 lg:p-0">
              <button
                onClick={handlePrevious}
                disabled={currentIndex <= 0}
                className={`btn-primary px-4 py-2 bg-blue-950 text-white font-semibold transition duration-300 hover:bg-blue-600 ${
                  currentIndex <= 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous Article
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= articles.length - 1}
                className={`btn-primary px-4 py-2 bg-blue-950 text-white font-semibold transition duration-300 hover:bg-blue-600 ${
                  currentIndex >= articles.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next Article
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-auto">
            <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>
          </div>
        )}
      </div>
      </div>
      <Foot />
    </>
  );
};

export default ArticlePage;
