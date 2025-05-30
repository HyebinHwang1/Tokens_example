import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const MyOutline24 = (
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
    <g id="my.outline.24">
      <g id="my.outline.24_2">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.625 7.625C7.625 5.20875 9.58375 3.25 12 3.25C14.4162 3.25 16.375 5.20875 16.375 7.625C16.375 10.0412 14.4162 12 12 12C9.58375 12 7.625 10.0412 7.625 7.625ZM12 2C8.8934 2 6.375 4.5184 6.375 7.625C6.375 10.7316 8.8934 13.25 12 13.25C15.1066 13.25 17.625 10.7316 17.625 7.625C17.625 4.5184 15.1066 2 12 2ZM7.625 15.75C5.20875 15.75 3.25 17.7088 3.25 20.125V21.375C3.25 21.7202 2.97018 22 2.625 22C2.27982 22 2 21.7202 2 21.375V20.125C2 17.0184 4.5184 14.5 7.625 14.5H16.375C19.4816 14.5 22 17.0184 22 20.125V21.375C22 21.7202 21.7202 22 21.375 22H15.125C14.7798 22 14.5 21.7202 14.5 21.375C14.5 21.0298 14.7798 20.75 15.125 20.75H20.75V20.125C20.75 17.7088 18.7912 15.75 16.375 15.75H7.625Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default MyOutline24;
