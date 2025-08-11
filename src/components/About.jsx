import React from "react";
import Launch from "../assets/Launch.svg";

function About() {
  return (
    <div className="w-full min-h-screen p-6 flex flex-col lg:flex-row items-center justify-around gap-8">
      
      {/* Text Section */}
      <div className="flex flex-col gap-6 justify-center items-center lg:items-start lg:max-w-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">
          About Us
        </h1>
        
        <p className="mt-2 font-medium text-base sm:text-lg md:text-xl text-justify">
          <span className="text-lg sm:text-xl md:text-2xl font-bold block mb-2">
            Turn Ideas into Websites — Instantly
          </span>
          Our AI Website Builder transforms your ideas into beautiful UI designs
          with clean HTML & CSS code in seconds. Just describe what you need,
          and watch it come alive in our real-time live preview — no coding
          skills required.
          <br /><br />
          From sleek landing pages to complete business sites, our AI delivers
          modern, responsive, and ready-to-use designs — all in one place.
          <br /><br />
          ✨ Imagine it. Describe it. Launch it.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={Launch}
          alt="AI Website Builder Launch"
          className="w-48 sm:w-64 md:w-80 lg:w-[28rem] h-auto"
        />
      </div>
    </div>
  );
}

export default About;
