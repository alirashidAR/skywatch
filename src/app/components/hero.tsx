"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Spline from '@splinetool/react-spline';

export function HeroHighlightDemo() {
  return (
    <div className="h-screen">
    <div className="absolute right-0 z-10 h-screen w-full">
    <Spline className="w-48"scene="https://prod.spline.design/2DlODdoJZ1d7uFHt/scene.splinecode" />
    </div>
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto Dispose"
      >
        <Highlight className="text-black dark:text-white Android p-4 text-3xl md:text-9xl">
          SkyWatch
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    <img src="https://i.ibb.co/56w95vh/2.png" alt="2" className="absolute max-md:w-40 w-80 max-md:top-36 top-12 max-md:right-10 right-20" />
    <img src="https://i.ibb.co/sgBmFdn/3.png" alt="3" className="absolute max-md:w-40 w-96 max-md:top-80 top-64 max-md:right-12 right-24"/>
    <img src="https://i.ibb.co/7RKLvcN/4.png" alt="4" className="absolute max-md:w-40 w-80 max-md:top-96 top-72 max-md:left-14 left-48"/>
    <img src="https://i.ibb.co/KVswJR1/6.png" alt="6" className="absolute max-md:w-40 w-80 max-md:top-44 top-0 max-md:left-10 left-20"/>
    </div>
  );
}
