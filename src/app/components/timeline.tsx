"use client";
import React, { useEffect } from "react";
import { Chrono } from "react-chrono";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
    media: {
      type: "IMAGE",
      source: {
        url: "/image1.jpg",
      },
    },
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
    media: {
      type: "IMAGE",
      source: {
        url: "/image1.jpg",
      },
    },
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
    media: {
      type: "IMAGE",
      source: {
        url: "/image1.jpg",
      },
    },
  },
];

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <div className="pt-10 Dispose">
      <div className="text-5xl min-w-24 justify-center items-center text-center pb-10">
        <span className="font-bold p-2 text-center border-4 border-purple-400 rounded-lg Dispose">Timeline</span>
      </div>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        itemWidth={150}
        disableToolbar
        theme={{
          primary: "rgba(255, 255, 255, 0.8)",
          secondary: "rgba(0, 0, 0, 0.7)",
          cardBgColor: "rgba(255, 255, 255, 0.8)",
          cardForeColor: "rgba(0, 0, 0, 0.7)",
          titleColor: "rgba(159, 122, 234)",
          cardTitleColor: "rgba(0, 0, 0, 0.7)",
          cardSubtitleColor: "rgba(0, 0, 0, 0.7)",
          cardDetailedText: "rgba(0, 0, 0, 0.7)",
        }}
        cardClassName="aos-init"
        mediaClassName="shadow-md"
        focusActiveItemOnLoad ="true"
        highlightCardsOnHover = "true"
      />
    </div>
  );
};

export default Timeline;
