"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const providers = [
  {
    id: 1,
    name: "Sanlam Life Insurance Ghana Merges with Allianz Life Insurance Ghana",
  },
  {
    id: 2,
    name: "Phoenix Life Assurance Merges with Ghana Union Assurance Life",
  },
  {
    id: 3,
    name: "Donewell Life Assurance Rebrands as Pinnacle Life Insurance",
  },
  {
    id: 4,
    name: "Beige Assure Company Limited Placed Under Statutory Management",
  },
  {
    id: 5,
    name: "Ghana Life Insurance Company Limited Under NIC Management",
  },
];

export default function InsuranceProvidersList() {
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    const observers = [];
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px", // Adjust these values to control when a section is considered "active"
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number.parseInt(entry.target.id.replace("provider-", ""));
          setActiveId(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all provider sections
    providers.forEach((provider) => {
      const element = document.getElementById(`provider-${provider.id}`);
      if (element) {
        observer.observe(element);
        // @ts-ignore
        observers.push(element);
      }
    });

    return () => {
      // Cleanup observers when component unmounts
      observers.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {providers?.map((provider) => (
          <li key={provider.id} className="flex gap-3">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-colors ${
                activeId === provider.id
                  ? "bg-[#59285F] text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {provider.id}
            </div>
            <Link
              href={`#provider-${provider.id}`}
              className={`transition-colors ${
                activeId === provider.id
                  ? "text-[#59285F] font-medium"
                  : "text-gray-700 hover:text-[#59285F]"
              }`}
            >
              {provider.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
