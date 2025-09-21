import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { AppProviders } from "@/redux/store/provider";

import { Toaster } from "react-hot-toast";
import ToastBridge from "@/components/ToastBridge";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-headings",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Halwai Delights",
  description: "Premium handcrafted sweets and catering services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <AppProviders>
          <Navbar />
          <main className="container">{children}</main>
          <ToastBridge />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: { background: "#f5a623", color: "#fff" },
            }}
          />
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
