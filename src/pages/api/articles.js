import dbConnect from '../../utils/dbConnect';
import Article from '../../models/Article';
import { trace } from 'next/dist/trace';

export default async function handler(req, res) {
  try {
    // Connect to the database
    await dbConnect();
    console.log('Connected to database pulling data');

    // Retrieve articles from the database
    const articles = await Article.find();
    // console.log('Articles:', articles);

    // Return articles as the response
    res.status(200).json({ articles });
  } catch (error) {
    console.error('Error retrieving articles:', error);
    res.status(500).json({ error: 'Server Error' });
  }
}
