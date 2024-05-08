import React, { SVGProps, memo } from "react";

const Location: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      fill="currentColor"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
      {...props}
    >
      <title>Konum ekle</title>
      <path d="M12.053 8.105a1.604 1.604 0 1 0 1.604 1.604 1.604 1.604 0 0 0-1.604-1.604Zm0-7.105a8.684 8.684 0 0 0-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 0 0 1.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0 0 12.053 1Zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0 1 13.417 0c0 3.985-3.944 8.538-6.709 11.002Z"></path>
    </svg>
  );
};

export default memo(Location);
