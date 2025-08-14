"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoSection({ videoUrl }: { videoUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <div className="bg-gradient-to-r from-[#59285F]/80 to-[#59285F]/60 relative h-[220px] lg:h-[318px] rounded-xl overflow-hidden">
        <img
          src="/images/video-bg.png"
          alt="Filing a complaint"
          className="w-full h-full object-cover absolute mix-blend-overlay rounded-[24px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            aria-label="Play video"
            onClick={() => setIsOpen(true)}
          >
            <Play className="w-8 h-8 text-[#59285F]" fill="#59285F" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full relative">
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <iframe
              width="100%"
              height={isMobile ? "400" : "500"}
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
