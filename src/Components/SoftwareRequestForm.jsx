import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from 'react-toastify';

const SoftwareRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: new Date(), // Initialize date field with current date
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date }); // Update date field in formData
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        toast.success("Sent successfully! will get back to you soon");
        // Reseting form data after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: new Date(),
        });
      } else {
        console.error("Error sending email:", response.statusText);
        toast.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      toast.error("Error sending email");
    }
  };

  return (
    <>
     <ToastContainer />
    <div className="max-w-md mx-auto mt-8 p-6 bg-blue-950 text-white rounded-sm shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-white">
        Request to schedule Meeting for Wealth Management
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-white">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-3 border border-gray-300  rounded-sm w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold text-white">
            Your Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 p-3 border border-gray-300  rounded-sm w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-3 border border-gray-300  rounded-sm w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold text-white">
            Date
          </label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="/MM/dd/yyyy"
            className="mt-1 p-3 border border-gray-300  rounded-sm w-full focus:outline-none focus:ring focus:border-blue-300 text-gray-900"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-[#5235F3] text-white rounded-sm hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default SoftwareRequestForm;
