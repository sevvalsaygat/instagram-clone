import React, { SVGProps, memo } from "react";

const Comment: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      aria-label="Yorum Yap"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <title>Yorum Yap</title>
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
    </svg>
  );
};

export default memo(Comment);
