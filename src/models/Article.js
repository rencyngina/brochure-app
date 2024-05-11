import mongoose from 'mongoose';

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  cloudinary_id: { type: String },
});

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

export default Article;