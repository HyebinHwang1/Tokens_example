import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const HeartOutline24 = (
  props: SVGProps<SVGSVGElement> & { size?: keyof typeof size },
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size[props.size || "md"]}
    height={size[props.size || "md"]}
    {...props}
  >
    <g id="heart.outline.24">
      <g id="heart.outline.24_2">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.83333 4.5C5.28702 4.5 3.25 6.50855 3.25 8.95312C3.25 9.93643 3.57737 10.845 4.13432 11.5831L12 19.2521L19.8657 11.5831C20.4226 10.845 20.75 9.93643 20.75 8.95312C20.75 6.50855 18.713 4.5 16.1667 4.5C14.6613 4.5 13.3298 5.20402 12.4951 6.28724C12.3767 6.4408 12.1939 6.53075 12 6.53075C11.8061 6.53075 11.6233 6.4408 11.5049 6.28724C10.6702 5.20402 9.33867 4.5 7.83333 4.5ZM2 8.95312C2 5.78855 4.62668 3.25 7.83333 3.25C9.4632 3.25 10.9401 3.90432 12 4.96172C13.0599 3.90432 14.5368 3.25 16.1667 3.25C19.3733 3.25 22 5.78855 22 8.95312C22 10.2396 21.5636 11.4269 20.8301 12.3798C20.8121 12.4032 20.7924 12.4253 20.7712 12.446L12.4363 20.5725C12.1936 20.8092 11.8064 20.8092 11.5637 20.5725L3.22882 12.446C3.20763 12.4253 3.18794 12.4032 3.16988 12.3798C2.43638 11.4269 2 10.2396 2 8.95312Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default HeartOutline24;
