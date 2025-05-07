"use client";

import { useEffect, useState } from "react";
import type { TOCItem } from "@/components/common/table-of-contents";

/**
 * A hook to automatically generate TOC items from headings in the document
 * @param contentSelector The selector for the content container
 * @param headingSelectors The selectors for the headings to include in the TOC
 * @returns An array of TOC items
 */
export function useTocItems(
  contentSelector = "[data-toc-content]",
  headingSelectors = "h1, h2, h3"
): TOCItem[] {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    const contentElement = document.querySelector(contentSelector);
    if (!contentElement) return;

    const headings = Array.from(
      contentElement.querySelectorAll(headingSelectors)
    );

    const items = headings.map((heading, index) => {
      // Get or create an ID for the heading
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }

      // Determine the level based on the heading tag
      const level = Number.parseInt(heading.tagName.substring(1), 10);

      return {
        id,
        title: heading.textContent || "",
        level,
      };
    });

    setTocItems(items);
  }, [contentSelector, headingSelectors]);

  return tocItems;
}
