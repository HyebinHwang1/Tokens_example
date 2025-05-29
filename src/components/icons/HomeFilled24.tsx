import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const HomeFilled24 = (
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
    <g id="home.filled.24">
      <g id="home.filled.24_2">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0224 2L21.9978 9.49895H22V9.79194H13.6302C13.2851 9.79194 13.0052 10.0718 13.0052 10.417C13.0052 10.7622 13.2851 11.042 13.6302 11.042H22V22H2V9.49895H2.00224L12.0224 2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default HomeFilled24;
