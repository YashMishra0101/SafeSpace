import React, { useState } from "react";
import imagethree from "../assets/imageOne.png";
import imageOne from "../assets/Designer.png";
import imageTwo from "../assets/positive.png";
import Footer from "../component/Footer";

const Home = () => {
  const [userName, setUserName] = useState(""); // Manage username manually

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center pt-6">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
          {userName ? `${userName}, we care about you.` : "We Care About You"}
        </h1>
        <p className="text-d md:text-lg text-gray-700 mt-4">
          Support is just a call away. Reach out. You are not alone.
        </p>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-8">
        <div className="w-full md:w-1/2 px-4">
          <section className="text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-semibold text-purple-600 mb-4">
              We're Here to Support You
            </h2>
            <p className="text-gray-700 mb-2 md:text-lg">
              If you're feeling overwhelmed or need someone to talk to, know
              that we're here for you. Our team of dedicated professionals is
              ready to provide support and guidance whenever you need it.
            </p>
            <p className="text-gray-700 md:text-lg">
              Don't hesitate to reach out to us. We believe in the power of
              connection and are committed to helping you navigate through
              life's challenges with compassion and understanding.
            </p>
          </section>
        </div>
        <div className="md:w-[30rem] w-[20rem] px-4">
          <img
            src={imageOne}
            alt="We Are With You"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-8">
        <div className="md:w-[30rem] w-[20rem] px-4">
          <img
            src={imageTwo}
            alt="We Are With You"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <section className="text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-semibold text-purple-600 mb-4">
              Be Positive
            </h2>
            <p className="text-gray-700 mb-2 md:text-lg">
              Life is a journey filled with twists and turns, challenges, and
              moments of joy. It's about embracing the ups and downs, navigating
              through uncertainties, and discovering the strength within
              ourselves.
            </p>
            <p className="text-gray-700 md:text-lg">
              Every experience shapes us, molds us into who we are today.
              Sometimes, we may feel lost or overwhelmed, but it's important to
              remember that we're capable of overcoming anything that comes our
              way.
            </p>
          </section>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 mt-8">
        <div className="w-full md:w-1/2 px-4">
          <section className="text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-semibold text-purple-600 mb-4">
              You're Never Alone
            </h2>
            <p className="text-gray-700 mb-2 md:text-lg">
              No matter what challenges you're facing, remember that you're not
              alone. We're here to support you every step of the way. Whether
              you need guidance, a listening ear, or just someone to talk to,
              our team is dedicated to providing a compassionate and
              understanding space for you.
            </p>
            <p className="text-gray-700 md:text-lg">
              Don't hesitate to reach out whenever you need support. Your
              well-being is important to us, and we're committed to helping you
              navigate through any difficulties you may encounter.
            </p>
          </section>
        </div>
        <div className="md:w-[30rem] w-[20rem] px-4">
          <img
            src={imagethree}
            alt="We Are With You"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
