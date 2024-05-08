import React from "react";
import Image from "next/image";

import { Icons } from "@app/components";

type StoriesPropTypes = {};

const STORIES_BY_OPTIONS: Array<{
  image: JSX.Element;
  title: string | JSX.Element;
  className?: string;
}> = [
  {
    image: (
      <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
        <Image
          height={58}
          width={58}
          alt="animal"
          src="/animal.png"
          className="rounded-full bg-white p-0.5"
        />
      </div>
    ),
    title: "cosmicwanderer",
    className: "max-w-[58px] max-h-[58px] truncate text-xs",
  },
  {
    image: (
      <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
        <Image
          height={58}
          width={58}
          alt="church"
          src="/church.png"
          className="rounded-full bg-white p-0.5"
        />
      </div>
    ),
    title: "pixel_pioneer",
    className: "max-w-[58px] max-h-[58px] truncate text-xs",
  },
  {
    image: (
      <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
        <Image
          height={58}
          width={58}
          alt="build"
          src="/build.png"
          className="rounded-full bg-white p-0.5"
        />
      </div>
    ),
    title: "stellarsynapse",
    className: "max-w-[58px] max-h-[58px] truncate text-xs",
  },
  {
    image: (
      <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
        <Image
          height={58}
          width={58}
          alt="cat"
          src="/cat.png"
          className="rounded-full bg-white p-0.5"
        />
      </div>
    ),
    title: "neon_nebula",
    className: "max-w-[58px] max-h-[58px] truncate text-xs",
  },
  {
    image: (
      <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
        <Image
          height={58}
          width={58}
          alt="clock_tower"
          src="/clock_tower.png"
          className="rounded-full bg-white p-0.5"
        />
      </div>
    ),
    title: "dreamdazzle",
    className: "max-w-[58px] max-h-[58px] truncate text-xs",
  },
  {
    image: (
      <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
        <Image
          height={58}
          width={58}
          alt="squares"
          src="/squares.png"
          className="rounded-full bg-white p-0.5"
        />
      </div>
    ),
    title: "mysticmirage",
    className: "max-w-[58px] max-h-[58px] truncate text-xs",
  },
  {
    image: (
      <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
        <Image
          height={58}
          width={58}
          alt="railway"
          src="/railway.png"
          className="rounded-full bg-white p-0.5"
        />
      </div>
    ),
    title: "velvetvoyage",
    className: "max-w-[58px] max-h-[58px] truncate text-xs",
  },
  {
    image: (
      <div className="relative">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer relative z-10">
              <Image
                height={58}
                width={58}
                alt="statue"
                src="/statue.png"
                className="rounded-full bg-white p-0.5"
              />
            </div>
          </div>
          <div className="bg-white z-10 rounded-full p-0.5 w-fit flex items-center justify-center absolute mt-5 mr-3 right-0 cursor-pointer">
            <Icons.ChevronRight />
          </div>
        </div>
      </div>
    ),
    title: "SonicSerendipity",
    className: "max-w-[58px] max-h-[58px] truncate text-xs",
  },
];

const Stories: React.FC<StoriesPropTypes> = () => {
  return (
    <div className="flex flex-row gap-5 mt-5 mb-8">
      {STORIES_BY_OPTIONS.map(({ image, title, className }, index) => {
        return (
          <div key={index} className="flex flex-row">
            <div className="flex flex-col">
              {image}
              <div className={className}>{title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
