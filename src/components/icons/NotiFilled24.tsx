import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const NotiFilled24 = (
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
    <g id="noti.filled.24">
      <g id="noti.filled.24_2">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 9.1875C4.5 5.04536 7.85786 1.6875 12 1.6875C16.1421 1.6875 19.5 5.04536 19.5 9.1875V17.9375H21.375C21.7202 17.9375 22 18.2173 22 18.5625C22 18.9077 21.7202 19.1875 21.375 19.1875H19.5H4.5H2.625C2.27982 19.1875 2 18.9077 2 18.5625C2 18.2173 2.27982 17.9375 2.625 17.9375H4.5V9.1875ZM9.5 21.0625C9.15482 21.0625 8.875 21.3423 8.875 21.6875C8.875 22.0327 9.15482 22.3125 9.5 22.3125H14.5C14.8452 22.3125 15.125 22.0327 15.125 21.6875C15.125 21.3423 14.8452 21.0625 14.5 21.0625H9.5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default NotiFilled24;
