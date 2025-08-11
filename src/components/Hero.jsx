import React from "react";
import TextType from "../bits/BlurText";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function Hero() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate("/dashboard"); // navigates to About page
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen px-4 py-10 text-center">
      
      {/* Typing Animation */}
      <TextType
        text={["Type Prompt", "Preview It", "Publish It"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-black dark:text-white"
        onComplete={handleAnimationComplete}
      />

      <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-2">
        Transform your ideas into stunning, responsive websites with our AI Website Builder. 
        Just type your prompt, watch the live preview update instantly, and publish your site — 
        all without writing a single line of code.
      </p>

      {/* CTA Button */}
      <button onClick={handleClick} className="border border-black dark:border-white rounded-2xl px-6 py-3 text-lg sm:text-xl mt-4 hover:bg-black hover:text-white transition-all">
        Get Started
      </button>

      {/* Scrolling Text */}
      <div className="w-full mt-10">
        <Marquee
          gradient={false}
          speed={50}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          DESCRIBE YOUR IDEA ✦ LET AI CODE IT ✦ SEE LIVE PREVIEW INSTANTLY ✦
          LAUNCH STUNNING, RESPONSIVE WEBSITES IN JUST MINUTES ✦ 
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;
