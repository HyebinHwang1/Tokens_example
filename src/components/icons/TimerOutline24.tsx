import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const TimerOutline24 = (
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
    <g id="timer.outline.24">
      <g id="timer.outline.24_2">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3888 7.36201C12.3888 7.01684 12.109 6.73701 11.7638 6.73701C11.4186 6.73701 11.1388 7.01684 11.1388 7.36201V12.362V12.987H11.7638H16.7638C17.109 12.987 17.3888 12.7072 17.3888 12.362C17.3888 12.0168 17.109 11.737 16.7638 11.737H12.3888V7.36201Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default TimerOutline24;
