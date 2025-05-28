"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFaqsDialogStore } from "@/hooks/use-complaint-store";
import { FAQItem } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { X } from "lucide-react";

// FAQ items

export function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  const { showDialog, dialogOpen: open, closeDialog } = useFaqsDialogStore();
  const isMobile = useIsMobile();

  const setOpen = () => {
    if (open) {
      return closeDialog();
    } else {
      showDialog();
    }
  };

  return (
    <>
      {!open ? (

      !isMobile &&  <div className="bg-white rounded-[28px] shadow-sm p-6 space-y-4">
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
      
      ) : (
        <Dialog open={open} onOpenChange={setOpen}  >
          <DialogContent className="[&>button:last-child]:hidden rounded-xl">
            <DialogHeader>
              <DialogTitle>
                {" "}
                <div className="text-xl py-4 bg-primaryLight rounded-[12px] font-bold text-center text-white flex items-center justify-between px-5">
                 <p> FAQs</p>
                 <X className="border rounded-full p-1 " size={30} onClick={closeDialog}></X>
                </div>
              </DialogTitle>
              <DialogDescription>
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
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
