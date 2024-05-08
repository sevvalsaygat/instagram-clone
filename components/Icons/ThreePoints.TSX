import React, { SVGProps, memo } from "react";

const ThreePoints: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <title>Diğer seçenekler</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};

export default memo(ThreePoints);
