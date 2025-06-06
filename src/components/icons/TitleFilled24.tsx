import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const TitleFilled24 = (
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
    <g id="title.filled.24">
      <g id="title.filled.24_2">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.877 2C13.5319 2 13.2521 2.27982 13.2521 2.625V10.125C13.2521 10.4702 13.5319 10.75 13.877 10.75H21.3752C21.7202 10.75 22 10.4702 22 10.125V2.625C22 2.27982 21.7202 2 21.3752 2H13.877ZM13.877 13.25C13.5319 13.25 13.2521 13.5298 13.2521 13.875V21.375C13.2521 21.7202 13.5319 22 13.877 22H21.3752C21.7202 22 22 21.7202 22 21.375V13.875C22 13.5298 21.7202 13.25 21.3752 13.25H13.877ZM2 13.875C2 13.5298 2.27975 13.25 2.62485 13.25H10.123C10.4681 13.25 10.7479 13.5298 10.7479 13.875V21.375C10.7479 21.7202 10.4681 22 10.123 22H2.62485C2.27975 22 2 21.7202 2 21.375V13.875ZM2.62485 2C2.27975 2 2 2.27982 2 2.625V10.125C2 10.4702 2.27975 10.75 2.62485 10.75H10.123C10.4681 10.75 10.7479 10.4702 10.7479 10.125V2.625C10.7479 2.27982 10.4681 2 10.123 2H2.62485Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default TitleFilled24;
