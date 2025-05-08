"use client";

import { type ReactNode, useEffect, useState } from "react";
import { TableOfContents, type TOCItem } from "./table-of-contents";
interface ContentLayoutProps {
  children: ReactNode;
  tocItems: TOCItem[];
}

export function ContentLayout({ children, tocItems }: ContentLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto p-4">
      <div className="md:w-1/4 md:sticky md:top-20 md:self-start">
        {isMounted && <TableOfContents items={tocItems} />}
      </div>
      <div className="md:w-3/4" data-toc-content>
        {children}
      </div>
    </div>
  );
}
