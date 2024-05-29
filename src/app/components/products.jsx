import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  // Define the image URL to be used for both cards
  const imageUrl1 = "https://i.ibb.co/wRf2j5W/Whats-App-Image-2024-05-11-at-15-17-22-1.jpg"
  const imageUrl2 = "https://i.ibb.co/qNczTjs/Whats-App-Image-2024-05-11-at-15-17-30-1.jpg"

  return (
    <div className="mt-10" id="products">
      <img src="https://i.ibb.co/56w95vh/2.png" alt="2" className="max-md:w-52 absolute w-80 right-20 -z-10" />
      <img src="https://i.ibb.co/sgBmFdn/3.png" alt="3" className="max-md:w-52 absolute max-md:left-0  w-96 left-20 -z-10"/>
      <div className="text-5xl min-w-24 justify-center items-center text-center">
        <span className="font-bold p-2 text-center border-4 border-purple-400 Dispose rounded-lg">Products</span>
      </div>
      <div className="flex justify-center max-md:flex-col">
        {/* First Card */}
        <CardContainer className="inter-var mx-4 max-md:w-3/4 max-md:text-sm">
          <CardBody className="Dispose bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              as="p"
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white text-center items-center w-full"
            >
              Make things float in air
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-10">
              <Image
                src={imageUrl1}
                height="1000"
                width="1000"
                className="md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border-2 border-purple-400"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-md mt-10 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam cum tenetur, quo animi sunt molestiae culpa nemo eligendi ipsum adipisci autem repellendus neque deserunt vel natus provident vitae laboriosam illo.
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* Second Card */}
        <CardContainer className="inter-var mx-4 max-md:w-3/4 max-md:text-sm">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white w-auto sm:w-[30rem] h-auto rounded-xl p-6 border Dispose">
            <CardItem
              as="p"
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white text-center items-center w-full"
            >
              Second Card Title
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-10">
              <Image
                src={imageUrl2}
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl group-hover/card:shadow-xl border-2 border-purple-400"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-md max-w-md dark:text-neutral-300 mt-10"
            >
              Description of the second card goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempore quasi at voluptatibus, enim suscipit assumenda reprehenderit obcaecati quis molestiae, ratione, consequatur accusamus aliquid. Laborum, saepe repudiandae? Ab, dolorem asperiores.
            </CardItem>
          </CardBody>
          <img src="https://i.ibb.co/sgBmFdn/3.png" alt="3" className="md:hidden absolute  w-96 right-20 -z-10"/>
        <img src="https://i.ibb.co/56w95vh/2.png" alt="2" className="max-md:w-52 md:hidden absolute w-80 left-20 -z-10" />
        </CardContainer>
      </div>
    </div>
  );
}
