import React, { useState } from "react";
import Image from "next/image";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Components/Nav";
const NewArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('image', image);

      const response = await fetch("/api/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Show toaster notification
        toast.success("Article created successfully!", {
          onClose: () => window.location.reload(), // Refresh page after notification is closed
        });
      } else {
        // Error handling
        console.error("Failed to create article:", response.statusText);
        toast.error("Failed to create article");
      }
    } catch (error) {
      console.error("Error creating article:", error);
      toast.error("Error creating article");
    }
  };

  return (
    <>
    <Nav />
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-8 rounded-lg mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Article</h2>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="input-field"
          />
          {image && (
            <div className="mt-2">
              <p className="text-gray-700">Selected Image:</p>
              <img src={URL.createObjectURL(image)} alt="Selected" className="mt-2 rounded-md" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm lg:text-xl text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter the title of your article"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field h-12 w-full border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <div className="input-field rounded-md border border-gray-300 focus-within:border-blue-500">
            <textarea
              id="content"
              placeholder="Tell your story..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="h-96 w-full resize-none p-4 focus:outline-none"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn-primary w-40 py-3 px-4 bg-blue-950 text-white font-semibold transition duration-300 hover:bg-blue-600">PUBLISH</button>
      </form>
    </>
  );
};

export default NewArticleForm;
