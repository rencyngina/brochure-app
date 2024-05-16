import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Components/Nav";

// Import ReactQuill dynamically to ensure it's only loaded in the browser
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

import "react-quill/dist/quill.snow.css"; // Add Quill's snow theme CSS

const NewArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
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
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-4 lg:p-8 mt-20 bg-white shadow-lg border border-yellow-500">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Create New Article</h2>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm lg:text-2xl font-medium text-gray-700 mb-4">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="input-field"
          />
          {imagePreview && (
            <div className="mt-2">
              <p className="text-gray-700">Selected Image:</p>
              <Image src={imagePreview} alt="Selected" className="mt-2 rounded-md" width={500} height={300} />
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
        <div className="mb-8">
          <div className="input-field rounded-md focus-within:border-blue-500">
            <ReactQuill
              theme="snow" // Use Quill's snow theme
              value={content}
              onChange={setContent}
              className="h-96 lg:h-100 w-full resize-none p-4 focus:outline-none mb-3 lg:mb-10"
              modules={quillModules} // Pass the modules object containing toolbar options
              formats={quillFormats} // Pass the formats array to enable text color
              required
            />
          </div>
        </div>
        <button type="submit" className="btn-primary w-40 py-3 px-4 bg-blue-950 text-white font-semibold transition duration-300 hover:bg-blue-600">PUBLISH</button>
      </form>
    </>
  );
};

// Modules and formats for Quill editor
const quillModules = {
  toolbar: {
    container: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    handlers: {
      'color': function (value) { // Custom handler for text color
        this.quill.format('color', value);
      }
    }
  }
};

const quillFormats = [
  'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote',
  'color', 'background', 'list', 'bullet', 'link', 'image', 'video'
];

export default NewArticleForm;

