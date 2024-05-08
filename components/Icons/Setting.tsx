import React, { SVGProps, memo } from "react";

const Setting: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <title>Ayarlar</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="4"
        y2="4"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="12"
        y2="12"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="20"
        y2="20"
      ></line>
    </svg>
  );
};

export default memo(Setting);
