"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSlider() {
  const isMobile = useIsMobile();
  const slides = [
    {
      id: 1,
      image: isMobile
        ? "/images/landing-1-mobile.png"
        : "/images/landing-1.png",
      title: "File a Complaint or Petition to the NIC",
      description:
        "The NIC is here to ensure fair treatment for all insurance customers in Ghana. Got a concern? We're listening.",
    },
    {
      id: 2,
      image: isMobile
        ? "/images/landing-2-mobile.png"
        : "/images/landing-2.png",
      title: "Seek Help After a Road accident",
      description:
        "If you've been involved in an accident with an uninsured or unidentified driver, you may qualify for support from the Motor Compensation Fund.",
    },
    {
      id: 3,
      image: isMobile
        ? "/images/landing-3-mobile.png"
        : "/images/landing-3.png",
      title: "Track Your Complaint Status in Real-Time",
      description:
        "Stay informed about the progress of your complaint with our transparent tracking system.",
    },
  ];
  console.log("is mobile", isMobile);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const animationDuration = 5000;
  const transitionDuration = 0.75;

  // Always have the latest slide index in a ref
  const slideIndexRef = useRef(currentSlide);
  slideIndexRef.current = currentSlide;

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
    const nextSlide = (slideIndexRef.current + 1) % slides.length;
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
  }, []);

  return (
    <div className="relative md:h-full h-[400px] rounded-[32px] bg-gradient-to-b from-primaryLight via-primaryLight to-primaryLight text-white overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
          className="md:h-full w-full"
        >
          <img
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={`Slide ${currentSlide + 1}`}
            className="object-cover h-full w-full "
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-primaryLight via-primaryLight/95 h-full pointer-events-none"
            style={{ top: isMobile ? "10%" : "20%"}}
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
            <h1 className="md:text-3xl text-2xl font-bold mb-4">
              {slides[currentSlide].title.split(" ").slice(0, 3).join(" ")}
              <br />
              {slides[currentSlide].title.split(" ").slice(3).join(" ")}
            </h1>
            <p className="md:text-lg text-sm  opacity-90 mb-12">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
