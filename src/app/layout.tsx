import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import ApolloClientProvider from "@/lib/apollo-client-provider";
import { Toaster } from "sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
}); 

export const metadata: Metadata = {
  title: "NIC CCMS Client Portal",
  description:
    "Your trusted hub for resolving insurance complaints",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        <ApolloClientProvider>{children}</ApolloClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
