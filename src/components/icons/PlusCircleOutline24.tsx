import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const PlusCircleOutline24 = (
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
    <g id="plus-circle.outline.24">
      <g id="plus-circle.outline.24_2">
        <circle
          id="Ellipse"
          cx="12"
          cy="12"
          r="9.4"
          stroke="#2F2F2F"
          strokeWidth="1.2"
        />
        <path
          id="Vector"
          d="M15.4286 12.5714H12.5714V15.4286C12.5714 15.5801 12.5112 15.7255 12.4041 15.8326C12.2969 15.9398 12.1516 16 12 16C11.8484 16 11.7031 15.9398 11.5959 15.8326C11.4888 15.7255 11.4286 15.5801 11.4286 15.4286V12.5714H8.57143C8.41988 12.5714 8.27453 12.5112 8.16737 12.4041C8.0602 12.2969 8 12.1516 8 12C8 11.8484 8.0602 11.7031 8.16737 11.5959C8.27453 11.4888 8.41988 11.4286 8.57143 11.4286H11.4286V8.57143C11.4286 8.41988 11.4888 8.27453 11.5959 8.16737C11.7031 8.0602 11.8484 8 12 8C12.1516 8 12.2969 8.0602 12.4041 8.16737C12.5112 8.27453 12.5714 8.41988 12.5714 8.57143V11.4286H15.4286C15.5801 11.4286 15.7255 11.4888 15.8326 11.5959C15.9398 11.7031 16 11.8484 16 12C16 12.1516 15.9398 12.2969 15.8326 12.4041C15.7255 12.5112 15.5801 12.5714 15.4286 12.5714Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default PlusCircleOutline24;
