import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleContent from "../../Components/ArticleContent"; // Create this component to display article content
import Navbar from "../../Components/Navnar";
import Foot from "@/Components/foot";

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/api/${id}`); // Adjust the API route path
        const data = await response.json();
        setArticle(data.data); // Assuming article data is nested under 'data' property
        console.log("Article data:", data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 flex justify-center items-center">
        {article ? (
          <ArticleContent article={article} />
        ) : (
          <div className="flex justify-center items-center h-auto">
            <div class="three-body">
              <div class="three-body__dot"></div>
              <div class="three-body__dot"></div>
              <div class="three-body__dot"></div>
            </div>
          </div>
        )}
      </div>
      <Foot />
    </>
  );
};

export default ArticlePage;
