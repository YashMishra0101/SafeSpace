import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, fireDb } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Footer from "../component/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password === confirmPassword) {
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const userUID = userCredential.user.uid;

        await setDoc(doc(fireDb, "users", userUID), {
          name: name,
          email: email,
        });

        toast.success("Signup Successful");
        navigate("/");
      } catch (error) {
        toast.error("Enter Valid Details");
        console.error(`Signup failed: ${error.message}`);
      }
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full px-6 py-8 border border-gray-300 rounded-lg shadow-md bg-white relative md:-top-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
            <span
              className="absolute top-2 right-3 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
            <span
              className="absolute top-2 right-3 cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="md:-mt-32">
      <Footer />
      </div>
    </div>
  );
};

export default SignUp;
