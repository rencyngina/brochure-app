import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleContent from "../../Components/ArticleContent"; // Create this component to display article content

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
    <div className="container mx-auto py-8 flex justify-center items-center">
  {article ? (
    <ArticleContent article={article} />
  ) : (
    <div className="loader">
      <span className="item"></span>
      <span className="item"></span>
      <span className="item"></span>
      <span className="item"></span>
    </div>
  )}
</div>

  );
};

export default ArticlePage;
