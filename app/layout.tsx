"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-pink-50 to-purple-50">
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}