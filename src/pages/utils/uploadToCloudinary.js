import dbConnect from './dbConnect';
import Article from './models/Article';
import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (file) => {
  try {
    // Upload image to Cloudinary
    const cloudinaryUpload = await cloudinary.uploader.upload(file, {
      folder: 'articles', // Optional: You can specify a folder in Cloudinary
      resource_type: 'auto' // Automatically detect the resource type (image, video, raw)
    });
    
    // Return the secure URL of the uploaded image
    return cloudinaryUpload.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw new Error('Error uploading image to Cloudinary');
  }
};

export const createArticle = async (req, res) => {
  const { title, content, image } = req.body;

  try {
    // Upload image to Cloudinary
    const imageUrl = await uploadToCloudinary(image);

    // Connect to the database
    await dbConnect();
    console.log('cloudinary connect db success')

    // Create a new article with the uploaded image URL
    const article = new Article({
      title,
      content,
      image: imageUrl
    });

    // Save the article to the database
    const savedArticle = await article.save();

    res.status(201).json(savedArticle);
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};
