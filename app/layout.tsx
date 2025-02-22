import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Namaball",
  description:
    "This is the Football Data Demo App built with NextJS and using football-data.org API, It shows livescore and standings for supported competitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans dark:bg-slate-900 dark:text-white bg-white text-black">
        <ThemeContextProvider>
          <header>
            <Navbar />
          </header>

          <main>{children}</main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
