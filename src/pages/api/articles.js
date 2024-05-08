const articles = [
  {
    id: 1,
    title: "Why I Became a Financial Advisor",
    image: "/images/pic1.jpg",
    content: "By Byron Moore Experiencing difficult things in life can hopefully bring about blessings and good, and sometimes",
  },
  {
    id: 2,
    title: "Article 2",
    image: "/images/old4.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Article 3",
    image: "/images/old3.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
];

export default function handler(req, res) {
  res.status(200).json({ articles });
}