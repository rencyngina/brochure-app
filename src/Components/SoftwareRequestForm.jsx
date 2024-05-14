import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SoftwareRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [startDate, setStartDate] = useState(new Date());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urls = ["https://api-dev-h0zp.onrender.com/send-email"];
    // "http://localhost:3000/send-email",

    try {
      let response;
      for (const url of urls) {
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Break the loop if the request was successful
          break;
        }
      }

      if (response.ok) {
        console.log("Email sent successfully!");
        // Show a success toast
        toast.success("Request sent successfully! will get back to you soon");

        // Reset form data after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error sending email:", response.statusText);
        // Show an error toast
        toast.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      // Show an error toast
      toast.error("Error sending email");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-blue-950 dark:text-white rounded-sm shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        Request to schedule Meeting for Wealth Management
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-white">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-3 border border-gray-300 dark:border-white rounded-sm w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-white">
            Your Phone Number
          </label>
          <input
            type="text"
            id="name"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 p-3 border border-gray-300 dark:border-white rounded-sm w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-3 border border-gray-300 dark:border-white rounded-sm w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 dark:text-white">
            Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy" // specify date format if needed
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-black"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-3 bg-[#5235F3] text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default SoftwareRequestForm;