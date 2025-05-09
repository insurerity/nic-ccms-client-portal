"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type TOCItem = {
  id: string;
  title: string;
  level: number;
};

interface TableOfContentsProps {
  items: TOCItem[];
  contentSelector?: string;
}

export function TableOfContents({
  items,
  contentSelector = "[data-toc-content]",
}: TableOfContentsProps) {
  console.log("toc items", items);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headings = Array.from(
        document.querySelectorAll(`${contentSelector} [id]`)
      );

      const visibleHeadings = headings.filter((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 3;
      });

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].id);
      }
    };

    // Initial check
    handleScroll();

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -80% 0%" }
    );

    const headingElements = document.querySelectorAll(
      `${contentSelector} [id]`
    );
    headingElements.forEach((element) => observer.observe(element));

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [contentSelector]);

  return (
    <div className="w-full max-w-xs">
      <div className="text-xl font-semibold mb-4">Table of Contents</div>
      <nav className="space-y-2">
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "flex items-center py-1 text-sm transition-colors hover:text-purple-700",
              activeId === item.id
                ? "text-purple-700 font-medium"
                : "text-gray-700"
            )}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${item.id}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <div className="flex items-center mr-2">
              <div
                className={cn(
                  "flex items-center justify-center w-6 h-6 rounded-full text-xs",
                  activeId === item.id
                    ? "bg-purple-700 text-white"
                    : "bg-gray-100 text-gray-700"
                )}
              >
                {index + 1}
              </div>
            </div>
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
