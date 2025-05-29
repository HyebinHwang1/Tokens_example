import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const CheckboxNonFilled24 = (
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
    <g id="checkbox-non.filled.24">
      <g id="checkbox-non.filled.24_2">
        <rect width="24" height="24" fill="white" />
        <path
          id="Rectangle 33464 (Stroke)"
          d="M22 2V22H2V2H22ZM3 21H21V3H3V21Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default CheckboxNonFilled24;
