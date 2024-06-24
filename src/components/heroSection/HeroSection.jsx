import React, { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/MyContext";

const HeroSection = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#30336b" }}
    >
      <div className="bg-gray-900 text-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-600">ZoBlogs</span>
          </h1>
          <p
            style={{ color: mode === "dark" ? "white" : "white" }}
            className="text-lg mb-8"
          >
            Discover the latest articles, news, and trends in the world of
            blogging.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
