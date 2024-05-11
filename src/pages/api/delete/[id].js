// pages/api/delete/[id].js
import dbConnect from "@/utils/dbConnect";
import Article from "@/models/Article";

export default async function handler(req, res) {
  const { id } = req.query;
  
  try {
    await dbConnect();

    const deletedArticle = await Article.deleteOne({ _id: id });
    
    if (deletedArticle.deletedCount === 0) {
      return res.status(404).json({ success: false, error: "Article not found" });
    }
    
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}

