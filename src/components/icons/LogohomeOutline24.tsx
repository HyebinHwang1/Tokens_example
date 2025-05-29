import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const LogohomeOutline24 = (
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
    <g id="logohome.outline.24">
      <g id="logohome.outline.24_2">
        <path
          id="Union"
          d="M22 22H2V2H22V22ZM3.25 20.75H20.75V3.25H3.25V20.75ZM12.3984 7.01367C14.9362 7.17773 17.0429 9.46279 16.999 12.0049V17H14.9541V12C14.9651 11.2461 14.6472 10.4889 14.0811 9.92188C13.5141 9.355 12.7559 9.03882 12.0107 9.04883C11.2545 9.03784 10.4987 9.35493 9.93262 9.92188C9.36658 10.4889 9.04873 11.2459 9.06055 11.9961V17H7.00098V12C6.95708 9.46342 9.06925 7.17776 11.6152 7.01367L12.0068 7L12.3984 7.01367Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default LogohomeOutline24;
