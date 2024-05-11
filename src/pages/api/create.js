// Import necessary modules
import dbConnect from "../../utils/dbConnect";
import Article from "../../models/Article";
import cloudinary from "cloudinary";
import formidable from "formidable-serverless";
import fs from "fs";

// Load environment variables
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form data:", err);
        res.status(500).json({ error: "Server Error" });
        return;
      }

      const { title, content } = fields;
      const { image } = files;

      try {
        // Connect to the database
        await dbConnect();
        console.log("Connected to the database 2");

        // Upload image to Cloudinary
        const cloudinaryUpload = await cloudinary.uploader.upload(image.path, {
          folder: "article_images", // Optional: You can specify a folder in Cloudinary
        });

        // Create a new article with the uploaded image URL
        const newArticle = new Article({
          title,
          content,
          image: cloudinaryUpload.secure_url, // Save the secure URL of the uploaded image
        });

        // Save the article to the database
        const savedArticle = await newArticle.save();
        console.log("Article saved successfully");

        res.status(201).json(savedArticle);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
      } finally {
        // Delete the temporary file uploaded
        fs.unlinkSync(files.image.path);
      }
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
