"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data for the slides
const slides = [
  {
    id: 1,
    image: "/images/landing-1.png",
    title: "File a Complaint or Petition to the NIC",
    description:
      "The NIC is here to ensure fair treatment for all insurance customers in Ghana. Got a concern? We're listening.",
  },
  {
    id: 2,
    image: "/images/landing-2.png",
    title: "Get Expert Assistance with Your Insurance Issues",
    description:
      "Our team of professionals is ready to help resolve your insurance disputes quickly and efficiently.",
  },
  {
    id: 3,
    image: "/images/landing-3.png",
    title: "Track Your Complaint Status in Real-Time",
    description:
      "Stay informed about the progress of your complaint with our transparent tracking system.",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const animationDuration = 5000;
  const transitionDuration = 0.75;

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), transitionDuration * 1000);
    }
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  };

  // Set up auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(goToNextSlide, animationDuration);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full md:w-1/2 bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900 text-white overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
          className="h-full w-full"
        >
          <img
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={`Slide ${currentSlide + 1}`}
            className="object-cover h-full w-full"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/80 to-transparent h-full pointer-events-none"
            style={{ top: "40%" }}
          ></div>
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        {/* Bottom text content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: transitionDuration, delay: 0.2 }}
            className="mt-auto"
          >
            <h1 className="text-4xl font-bold mb-4">
              {slides[currentSlide].title.split(" ").slice(0, 3).join(" ")}
              <br />
              {slides[currentSlide].title.split(" ").slice(3).join(" ")}
            </h1>
            <p className="text-lg opacity-90 mb-12">
              {slides[currentSlide].description.split(".")[0]}
              <br />
              {slides[currentSlide].description
                .split(".")
                .slice(1)
                .join(".")
                .trim()}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Slider dots with animation */}
        <div className="flex items-center space-x-2">
          {slides?.map((_, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                } transition-all duration-300 cursor-pointer `}
                aria-label={`Go to slide ${index + 1}`}
              />

              {/* {index === currentSlide && (
                <motion.div
                  className="absolute top-0 left-0 h-2 bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{
                    width: ["0%", "100%", "0%"],
                    left: ["0%", "0%", "100%"],
                  }}
                  transition={{
                    duration: animationDuration / 1000,
                    times: [0, 0.9, 1],
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 0,
                  }}
                />
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
