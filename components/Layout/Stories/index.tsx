import React from "react";
import Image from "next/image";

import { Icons } from "@app/components";

type StoriesPropTypes = {};

const Stories: React.FC<StoriesPropTypes> = () => {
  return (
    <div className="flex flex-row gap-5 my-5">
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
          <Image
            height={58}
            width={58}
            alt="profile"
            src="/profile.png"
            className="rounded-full bg-white p-0.5"
          />
        </div>
        <div className="max-w-[58px] max-h-[58px] truncate text-xs">
          CosmicWanderer
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
          <Image
            height={58}
            width={58}
            alt="profile2"
            src="/profile2.png"
            className="rounded-full bg-white p-0.5"
          />
        </div>
        <div className="max-w-[58px] max-h-[58px] truncate text-xs">
          PixelPioneer
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
          <Image
            height={58}
            width={58}
            alt="profile3"
            src="/profile3.png"
            className="rounded-full bg-white p-0.5"
          />
        </div>
        <div className="max-w-[58px] max-h-[58px] truncate text-xs">
          StellarSynapse
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
          <Image
            height={58}
            width={58}
            alt="profile4"
            src="/profile4.png"
            className="rounded-full bg-white p-0.5"
          />
        </div>
        <div className="max-w-[58px] max-h-[58px] truncate text-xs">
          NeonNebula
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
          <Image
            height={58}
            width={58}
            alt="profile5"
            src="/profile5.png"
            className="rounded-full bg-white p-0.5"
          />
        </div>
        <div className="max-w-[58px] max-h-[58px] truncate text-xs">
          DreamDazzle
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
          <Image
            height={58}
            width={58}
            alt="profile6"
            src="/profile6.png"
            className="rounded-full bg-white p-0.5"
          />
        </div>
        <div className="max-w-[58px] max-h-[58px] truncate text-xs">
          MysticMirage
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer">
          <Image
            height={58}
            width={58}
            alt="profile7"
            src="/profile7.png"
            className="rounded-full bg-white p-0.5"
          />
        </div>
        <div className="max-w-[58px] max-h-[58px] truncate text-xs">
          VelvetVoyage
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="bg-gradient-to-r from-yellow-300 via-rose-500 to-fuchsia-600 p-0.5 rounded-full cursor-pointer relative z-10">
              <Image
                height={58}
                width={58}
                alt="profile8"
                src="/profile8.png"
                className="rounded-full bg-white p-0.5"
              />
            </div>
            <div className="max-w-[58px] max-h-[58px] truncate text-xs">
              SonicSerendipity
            </div>
          </div>
          <div className="bg-white rounded-full p-0.5 w-fit flex items-center justify-center absolute mt-5 mr-3 right-0 z-20 cursor-pointer">
            <Icons.ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
