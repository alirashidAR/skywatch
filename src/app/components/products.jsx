import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  // Define the image URL to be used for both cards
  const imageUrl =
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="mt-10">
      <h1 className="font-bold mb-8 text-center Dispose text-5xl">Our Products</h1>
      <div className="flex justify-center">
        {/* First Card */}
        <CardContainer className="inter-var mx-4">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-10">
              <Image
                src={imageUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-2 border-purple-400 "
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-md mt-10 dark:text-neutral-300 "
            >
              Hover over this card to unleash the power of CSS perspective. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam cum tenetur, quo animi sunt molestiae culpa nemo eligendi ipsum adipisci autem repellendus neque deserunt vel natus provident vitae laboriosam illo.
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Second Card */}
        <CardContainer className="inter-var mx-4">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Second Card Title
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-10">
              <Image
                src={imageUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-2 border-purple-400"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-md dark:text-neutral-300 mt-10"
            >
              Description of the second card goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempore quasi at voluptatibus, enim suscipit assumenda reprehenderit obcaecati quis molestiae, ratione, consequatur accusamus aliquid. Laborum, saepe repudiandae? Ab, dolorem asperiores.
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
