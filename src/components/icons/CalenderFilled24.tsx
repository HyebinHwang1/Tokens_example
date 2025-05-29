import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const CalenderFilled24 = (
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
    <g id="calender.filled.24">
      <g id="calender.filled.24_2">
        <path
          id="Union"
          d="M17.625 2.00293C17.9702 2.00293 18.25 2.28275 18.25 2.62793V5.04688H20.75C21.4402 5.04688 21.9998 5.60667 22 6.29688V20.75C22 21.4404 21.4404 22 20.75 22H3.25C2.55964 22 2 21.4404 2 20.75V6.29688C2.00018 5.60667 2.55975 5.04688 3.25 5.04688H17V2.62793C17 2.28275 17.2798 2.00293 17.625 2.00293ZM3.25 6.29688V8.64062H20.75V6.29688H3.25ZM6.37109 2C6.7161 2.0002 6.99609 2.27994 6.99609 2.625V5.0459H5.74609V2.625C5.74609 2.27982 6.02592 2 6.37109 2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default CalenderFilled24;
