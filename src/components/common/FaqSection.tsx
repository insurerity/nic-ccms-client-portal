"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/types";

// FAQ items

export function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="bg-white rounded-[28px] shadow-sm p-6 space-y-4">
      <h2 className="text-xl py-4 bg-primary100 rounded-[12px] font-bold text-center text-primaryLight">
        FAQs
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs?.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primaryLight text-white text-xs flex-shrink-0">
                  {item.id}
                </div>
                <div className="flex-1">
                  <span>{item.question}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
