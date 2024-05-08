import React from "react";
import Image from "next/image";

import { Icons } from "@app/components";

type ListItemPropTypes = {
  post: PostType;
};

const ListItem: React.FC<ListItemPropTypes> = ({ post }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col mb-10">
        <div className="flex flex-row gap-3 items-center mb-3">
          <Image
            height={35}
            width={35}
            alt="house"
            src="/house.png"
            className="rounded-full bg-white p-0.5 cursor-pointer"
          />
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row gap-2 cursor-pointer">
              <div className="text-sm leading-4 font-semibold">
                sapphiresiren
              </div>
              <div className="text-sm leading-4 text-gray-400">• 1s</div>
            </div>
            <Icons.ThreePoints className="cursor-pointer" />
          </div>
        </div>
        <div className="flex  relative">
          <Image
            src={post.image}
            width={0}
            height={0}
            alt="logo"
            style={{
              width: "100%",
              height: "100%",
            }}
            className="object-cover max-w-[468px]"
          />
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <Icons.Heart className="cursor-pointer hover:text-gray-400" />
              <Icons.Comment className="cursor-pointe hover:text-gray-400" />
              <Icons.Send className="cursor-pointer hover:text-gray-400" />
            </div>
            <Icons.Save className="cursor-pointer hover:text-gray-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-1 mt-3">
              <Image
                height={0}
                width={0}
                alt="squares"
                src="/squares.png"
                className="rounded-full"
                style={{
                  width: "3%",
                  height: "3%",
                }}
              />
              <div className="text-sm leading-5 font-semibold">
                mysticmirage ve diğer kişiler beğendi
              </div>
            </div>
            <div className="flex flex-row gap-1 mt-2">
              <div className="text-sm font-semibold leading-5">
                sapphiresiren
              </div>
              <div className="text-sm leading-5">{post.description}</div>
            </div>
            <div className="text-sm leading-5 text-gray-400 mt-2">
              22 yorumun tümünü gör
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="text-sm leading-5 text-slate-300 mt-2">
                Yorum ekle...
              </div>
              <Icons.SmileFace className="text-gray-400 cursor-pointer" />
            </div>
            <div className="border-gray-300 border-b mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
