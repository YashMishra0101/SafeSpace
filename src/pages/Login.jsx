import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "password") {
      toast.success("Login Successful");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container mx-auto mt-28 max-w-md w-full px-6 py-8 border border-gray-300 rounded-lg shadow-md bg-white">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:border-purple-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-0 right-0 mt-3 mr-4 focus:outline-none"
              >
                {showPassword ? (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2 12s1.5-2 4-2 4 2 4 2m-8 3v2a2 2 0 002 2h12a2 2 0 002-2v-2m-2.879-7.657a9 9 0 1113.757 0C20.584 6.18 20.053 5.029 19 4c-1.053-1.029-2.584-2.18-4.121-3.657C13.717.272 12.88 0 12 0s-1.717.272-2.879.343C7.584 1.821 6.053 2.972 5 4c-1.053 1.029-2.584 2.18-4.121 3.657z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2 12s1.5-2 4-2 4 2 4 2m-8 3v2a2 2 0 002 2h12a2 2 0 002-2v-2m-2.879-7.657a9 9 0 1113.757 0C20.584 6.18 20.053 5.029 19 4c-1.053-1.029-2.584-2.18-4.121-3.657C13.717.272 12.88 0 12 0s-1.717.272-2.879.343C7.584 1.821 6.053 2.972 5 4c-1.053 1.029-2.584 2.18-4.121 3.657z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
      <div className="mt-10">
      <Footer />
      </div>
    </div>
  );
};

export default Login;
