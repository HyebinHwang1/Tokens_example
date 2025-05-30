import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const TileOutline24 = (
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
    <g id="tile.outline.24">
      <g id="tile.outline.24_2">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.625 2C2.27982 2 2 2.27982 2 2.625V10.125C2 10.4702 2.27982 10.75 2.625 10.75H10.125C10.4702 10.75 10.75 10.4702 10.75 10.125V2.625C10.75 2.27982 10.4702 2 10.125 2H2.625ZM3.25 9.5V3.25H9.5V9.5H3.25ZM2.625 13.25C2.27982 13.25 2 13.5298 2 13.875V21.375C2 21.7202 2.27982 22 2.625 22H10.125C10.4702 22 10.75 21.7202 10.75 21.375V13.875C10.75 13.5298 10.4702 13.25 10.125 13.25H2.625ZM3.25 20.75V14.5H9.5V20.75H3.25ZM13.25 2.625C13.25 2.27982 13.5298 2 13.875 2H21.375C21.7202 2 22 2.27982 22 2.625V10.125C22 10.4702 21.7202 10.75 21.375 10.75H13.875C13.5298 10.75 13.25 10.4702 13.25 10.125V2.625ZM14.5 3.25V9.5H20.75V3.25H14.5ZM13.875 13.25C13.5298 13.25 13.25 13.5298 13.25 13.875V21.375C13.25 21.7202 13.5298 22 13.875 22H21.375C21.7202 22 22 21.7202 22 21.375V13.875C22 13.5298 21.7202 13.25 21.375 13.25H13.875ZM14.5 20.75V14.5H20.75V20.75H14.5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default TileOutline24;
