import React from "react";
import Link from "next/link";

import cn from "classnames";

import { Icons } from "@app/components";

type SidebarPropTypes = {};

const SIDEBAR_TOP_BY_OPTIONS: Array<{
  title: string | JSX.Element;
  icon: React.FC;
  className?: string;
}> = [
  {
    title: <Link href="/">Ana Sayfa</Link>,
    icon: () => (
      <Icons.Home className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base font-semibold leading-5",
  },
  {
    title: "Ara",
    icon: () => (
      <Icons.Search className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base leading-5",
  },
  {
    title: "Keşfet",
    icon: () => (
      <Icons.Discover className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base leading-5",
  },
  {
    title: "Reels",
    icon: () => (
      <Icons.Reels className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base leading-5",
  },
  {
    title: "Mesajlar",
    icon: () => (
      <Icons.Messages className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base leading-5",
  },
  {
    title: "Bildirimler",
    icon: () => (
      <Icons.Notification className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base leading-5",
  },
  {
    title: <Link href="post/new">Oluştur</Link>,
    icon: () => (
      <Icons.Create className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base leading-5",
  },
  {
    title: "Profil",
    icon: () => (
      <Icons.Profile className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base leading-5",
  },
];

const SIDEBAR_BOTTOM_BY_OPTIONS: Array<{
  title: string | JSX.Element;
  icon: React.FC;
  className?: string;
}> = [
  {
    title: "Daha Fazla",
    icon: () => (
      <Icons.Setting className="transform transition ease-in-out delay-150  group-hover:-translate-y-0.5 hover:scale-110 duration-200" />
    ),
    className: "text-base leading-5 bottom-0 w-full",
  },
];

const Sidebar: React.FC<SidebarPropTypes> = () => {
  return (
    <div className="flex flex-col pt-2 px-3 border-r border-gray-300 h-full">
      <div className="px-3 pt-8 pb-3 mb-5">
        <Icons.Logo />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          {SIDEBAR_TOP_BY_OPTIONS.map(
            ({ icon: Icon, title, className }, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "group flex flex-row gap-4 items-center py-3 px-3 hover:bg-gray-200 my-1 cursor-pointer rounded-lg transition-all duration-100",
                    className
                  )}
                >
                  <Icon />
                  {title}
                </div>
              );
            }
          )}
        </div>
        <div className="flex flex-col">
          {SIDEBAR_BOTTOM_BY_OPTIONS.map(
            ({ icon: Icon, title, className }, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "group flex flex-row gap-4 items-center py-3 px-3 mb-8 hover:bg-gray-200 my-1 cursor-pointer rounded-lg transition-all duration-100",
                    className
                  )}
                >
                  <Icon />
                  {title}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
