import React from "react";

import cn from "classnames";

import { Icons } from "@app/components";

type SidebarPropTypes = {};

const SIDEBAR_BY_OPTIONS: Array<{
  title: string;
  icon: React.FC;
  className?: string;
}> = [
  {
    title: "Ana Sayfa",
    icon: () => <Icons.Home />,
    className: "text-base font-semibold leading-5",
  },
  {
    title: "Ara",
    icon: () => <Icons.Search />,
    className: "text-base leading-5",
  },
  {
    title: "Keşfet",
    icon: () => <Icons.Discover />,
    className: "text-base leading-5",
  },
  {
    title: "Reels",
    icon: () => <Icons.Reels />,
    className: "text-base leading-5",
  },
  {
    title: "Mesajlar",
    icon: () => <Icons.Messages />,
    className: "text-base leading-5",
  },
  {
    title: "Bildirimler",
    icon: () => <Icons.Notification />,
    className: "text-base leading-5",
  },
  {
    title: "Oluştur",
    icon: () => <Icons.Create />,
    className: "text-base leading-5",
  },
  {
    title: "Profil",
    icon: () => <Icons.Profile />,
    className: "text-base leading-5",
  },
];

const Sidebar: React.FC<SidebarPropTypes> = () => {
  return (
    <div className="fixed pt-2 px-3 w-1/4 h-screen">
      <div className="px-3 pt-8 pb-3 mb-5">
        <Icons.Logo />
      </div>
      <div className="flex flex-col px-3">
        {SIDEBAR_BY_OPTIONS.map(({ icon: Icon, title, className }, index) => {
          return (
            <div
              key={index}
              className={cn(
                "flex flex-row gap-4 items-center py-3 my-1 cursor-pointer hover:bg-gray-200 w-full",
                className
              )}
            >
              <Icon />
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
