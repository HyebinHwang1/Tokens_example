import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const MyFilled24 = (
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
    <g id="my.filled.24">
      <g id="my.filled.24_2">
        <path
          id="Union"
          d="M17 14.5C19.7614 14.5 22 16.7386 22 19.5V19.5156H16.75C16.4048 19.5156 16.125 19.7954 16.125 20.1406C16.1252 20.4856 16.405 20.7656 16.75 20.7656H22V22H2V19.5C2 16.7386 4.23858 14.5 7 14.5H17ZM12 2C15.1066 2 17.625 4.5184 17.625 7.625C17.625 10.7316 15.1066 13.25 12 13.25C8.8934 13.25 6.375 10.7316 6.375 7.625C6.375 4.5184 8.8934 2 12 2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default MyFilled24;
