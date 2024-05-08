import React, { useState } from "react";
import Image from "next/image";

const NewArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, image }),
      });

      if (response.ok) {
        // Article created successfully, you can handle the response as needed
        console.log("Article created successfully!");
      } else {
        // Error handling
        console.error("Failed to create article:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto shadow-md p-8 bg-blue-500 rounded-lg mt-20">
  <h2 className="text-2xl mb-4 font-bold text-gray-800">Create New Article</h2>
  <div className="mb-4">
    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
    <input
      type="text"
      id="title"
      placeholder="Enter the title of your article"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="input-field"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
    <textarea
      id="content"
      placeholder="Enter the content of your article"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="input-field h-40 resize-none"
    ></textarea>
  </div>
  <div className="mb-4">
    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
    <input
      type="text"
      id="image"
      placeholder="Enter the image URL for your article"
      value={image}
      onChange={(e) => setImage(e.target.value)}
      className="input-field"
    />
  </div>
  <button type="submit" className="btn-primary w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md transition duration-300 hover:bg-blue-600">Create Article</button>
</form>
  );
};

export default NewArticleForm;
