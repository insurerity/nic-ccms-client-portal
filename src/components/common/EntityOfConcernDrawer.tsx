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
import GoBack from "@/app/components/back-button";
import Logo from "./Logo";

// Sample data for insurance providers
const insuranceProviders = [
  {
    id: 1,
    name: "Santam Life Insurance Ghana Merges with Allianz Life Insurance Ghana",
    shortName:
      "Santam Life Insurance Ghana Merges with Allianz Life Insurance Ghana",
    lastUpdate: "May 2024",
    description:
      "In May 2024, the National Insurance Commission (NIC) granted final approval for the merger of Santam and Allianz's Ghanaian subsidiaries. This consolidation resulted in the formation of SantamAllianz, a joint venture operating across 27 African countries with a combined enterprise value of nearly $4 billion. The merger integrated Santam Life Insurance Ghana with Allianz Life Insurance Ghana, and Santam General Insurance Ghana with Allianz Insurance Ghana, aiming to enhance market presence and operational efficiency in Ghana's insurance sector.",
  },
  {
    id: 2,
    name: "Phoenix Life Assurance Merges with Ghana Union Assurance Life",
    shortName: "Phoenix Life Assurance Merges with Ghana Union Assurance Life",
    lastUpdate: "March 2022",
    description:
      "On March 25, 2022, the NIC approved the merger of Phoenix Life Assurance Company Limited with Ghana Union Assurance Life Company Limited. Post-merger, the unified entity continues operations under the name Ghana Union Assurance Life Company Limited. All existing policyholders of Phoenix Life Assurance have been transitioned to the new entity, ensuring continuity of their insurance coverage.",
  },
  {
    id: 3,
    name: "Donewell Life Assurance Rebrands as Pinnacle Life Insurance",
    shortName: "Donewell Life Assurance Rebrands as Pinnacle Life Insurance",
    lastUpdate: "January 2023",
    description:
      "Donewell Life Assurance has officially rebranded as Pinnacle Life Insurance following approval from the National Insurance Commission. The rebranding reflects the company's strategic repositioning in the market and commitment to providing enhanced insurance solutions to its customers.",
  },
  {
    id: 4,
    name: "Beige Assure Company Limited Placed Under Statutory Management",
    shortName: "Beige Assure Company Limited Placed Under Statutory Management",
    lastUpdate: "November 2022",
    description:
      "The National Insurance Commission has placed Beige Assure Company Limited under statutory management due to concerns regarding the company's financial stability and compliance with regulatory requirements. This intervention aims to protect policyholders and ensure the company's operations align with industry standards.",
  },
  {
    id: 5,
    name: "Ghana Life Insurance Company Limited Under NIC Management",
    shortName: "Ghana Life Insurance Company Limited Under NIC Management",
    lastUpdate: "August 2023",
    description:
      "Ghana Life Insurance Company Limited has been placed under the direct supervision of the National Insurance Commission following identified irregularities in its financial reporting and operational practices. The NIC has appointed a temporary management team to oversee the company's affairs and implement necessary corrective measures.",
  },
  {
    id: 6,
    name: "RegencyNem Insurance Limited Supervised by NIC",
    shortName: "RegencyNem Insurance Limited Supervised by NIC",
    lastUpdate: "October 2023",
    description:
      "RegencyNem Insurance Limited is currently under the supervision of the National Insurance Commission as part of regulatory measures to ensure compliance with industry standards and protect the interests of policyholders. The NIC is working closely with the company's management to address identified areas of concern.",
  },
];

export function EntityDrawer() {
  const { showDrawer, drawerOpen: open, closeDrawer } = useEntityDrawerStore();
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProviders = insuranceProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProviderClick = (id: number) => {
    setSelectedProvider(id);
  };

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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  {filteredProviders.map((provider, index) => (
                    <div
                      key={provider.id}
                      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-muted transition-colors ${
                        selectedProvider === provider.id ? "bg-muted" : ""
                      }`}
                      onClick={() => handleProviderClick(provider.id)}
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6a1b9a] text-white">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <div className="text-sm">{provider.shortName}</div>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-2 space-y-8">
                  {selectedProvider ? (
                    <>
                      {insuranceProviders
                        .filter((provider) => provider.id === selectedProvider)
                        .map((provider) => (
                          <div key={provider.id} className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#6a1b9a]">
                              {provider.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Last Update: {provider.lastUpdate}
                            </p>
                            <p className="text-sm">{provider.description}</p>
                          </div>
                        ))}
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center text-center p-8">
                      <p className="text-muted-foreground">
                        Select an insurance provider to view details
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
