import dbConnect from '../../utils/dbConnect';
import Article from '../../models/Article';

export default async function handler(req, res) {
  const { query: { id }, method } = req;

  await dbConnect(); // Connect to your database

  switch (method) {
    case 'GET':
      try {
        const article = await Article.findById(id);
        if (!article) {
          return res.status(404).json({ success: false, message: 'Article not found' });
        }
        res.status(200).json({ success: true, data: article });
      } catch (error) {
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
      break;
    default:
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
      break;
  }
}
