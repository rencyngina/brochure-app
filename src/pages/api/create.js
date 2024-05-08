import dbConnect from '../../pages/utils/dbConnect';
import Article from '../../pages/models/Article'; // Assuming you have a Mongoose model for Article

export default async function handler(req, res) {
  const { title, content, image } = req.body;

  try {
    await dbConnect(); // Connect to your database
    console.log('connected to db')

    // Create a new article
    const newArticle = new Article({
      title,
      content,
      image
    });

    // Save the article to the database
    const savedArticle = await newArticle.save();
    console.log('saved article', savedArticle)

    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
}