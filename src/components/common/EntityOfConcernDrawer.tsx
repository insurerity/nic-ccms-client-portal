"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useEntityDrawerStore } from "@/hooks/use-complaint-store";
import { Separator } from "../ui/separator";
import Logo from "./Logo";
import InsuranceProvidersList from "@/app/notifications/components/insurance-providers";
import MainContent from "@/app/notifications/components/MainContent";

export function EntityDrawer() {
  const { showDrawer, drawerOpen: open, closeDrawer } = useEntityDrawerStore();

  const [searchQuery, setSearchQuery] = useState("");

  const setOpen = () => {
    if (open) {
      return closeDrawer();
    } else {
      showDrawer();
    }
  };

  return (
    <>
      <Drawer direction="bottom" open={open} onOpenChange={setOpen}>
        <DrawerContent className="max-h-[85vh] overflow-y-auto">
          <div className="">
            <DrawerHeader className="px-4 sm:px-6">
              <div className="flex justify-between items-center">
                <Logo />
                <DrawerClose asChild>
                  <Button className="rounded-full" variant="outline">
                    Go Back
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.768555H12.5C13.0909 0.768555 13.6761 0.884951 14.2221 1.1111C14.768 1.33724 15.2641 1.66871 15.682 2.08657C16.0998 2.50444 16.4313 3.00051 16.6575 3.54648C16.8836 4.09244 17 4.67761 17 5.26855C17 5.8595 16.8836 6.44467 16.6575 6.99063C16.4313 7.5366 16.0998 8.03267 15.682 8.45053C15.2641 8.8684 14.768 9.19987 14.2221 9.42601C13.6761 9.65216 13.0909 9.76855 12.5 9.76855H1"
                        stroke="#59285F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 6.76855C4 6.76855 1 8.97855 1 9.76855C1 10.5586 4 12.7686 4 12.7686"
                        stroke="#59285F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </DrawerClose>
              </div>
            </DrawerHeader>
            <Separator className="w-full mt-6" />

            <div className="p-4 sm:p-6">
              <div className="relative mb-8 max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Search for an insurance provider"
                  className="pl-10 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 lg:w-1/4">
                  <div className="sticky top-4">
                    <InsuranceProvidersList />
                  </div>
                </div>
                <div className="md:w-2/3 lg:w-3/4">
                  <MainContent />
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
