import React, { useState } from "react";
import Footer from "../component/Footer";
import toast, { Toaster } from "react-hot-toast";

const ReachOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(
      "Your message has been submitted successfully. We will contact you soon. 😊👍",
      {
        duration: 3000,
      }
    );
    console.log("Form submitted", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      ,
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 text-center">
          We are with you ☺️
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            How can we help you?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Contact Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Email:</strong> support@safespace.com
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Phone:</strong> +91 98765 43210
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Alternate Email:</strong> help@safespace.com
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Alternate Phone:</strong> +91 87654 32109
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Additional Email:</strong> info@safespace.com
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Additional Phone:</strong> +91 76543 21098
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 -mb-1">
        <Footer />
      </div>
    </div>
  );
};

export default ReachOut;
