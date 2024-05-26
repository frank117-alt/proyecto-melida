import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "nuestro ambiente",
  description: "blog acerca de plantas medicinales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-50">
        {children}
          </div></body>
    </html>
  );
}
