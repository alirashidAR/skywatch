import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutGridDemo from "./components/achievements";
import { HeroHighlightDemo } from "./components/hero";
import { StickyScrollRevealDemo } from "./components/hacks";
import {ThreeDCardDemo} from './components/products';
import  NavbarTop  from "./components/navbartop";
import Footer from "./components/footer";
import MovingCards from './components/infinite-cards';
import Timeline from './components/timeline.tsx';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarTop/>
        <HeroHighlightDemo />
        <MovingCards/>
        <ThreeDCardDemo/>
        <Timeline/>
        <LayoutGridDemo />
        <Footer/>
      </body>
    </html>
  );
}
