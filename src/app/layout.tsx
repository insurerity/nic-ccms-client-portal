import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { MaintenanceUIAdvanced } from "@/components/maintenance";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NIC CCMS Client Portal",
  description: "Your trusted hub for resolving insurance complaints",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  

  if (isMaintenanceMode) {
    return (
      <html lang="en">
        <body className={`${raleway.className} antialiased`}>
          <MaintenanceUIAdvanced />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
