import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const PointFilled24 = (
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
    <g id="point.filled.24">
      <g id="point.filled.24_2">
        <path
          id="Union"
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.31836 7V17.6055H10.6367V13.7529H12.9365C13.7371 13.7529 14.4064 13.6044 14.9434 13.3066C15.4804 13.0088 15.8809 12.6054 16.1445 12.0977C16.4081 11.5899 16.54 11.0136 16.54 10.3691C16.54 9.7151 16.408 9.13658 16.1445 8.63379C15.8809 8.13086 15.4775 7.73242 14.9355 7.43945C14.3937 7.14654 13.7224 7.00006 12.9219 7H9.31836ZM12.8633 8.17188C13.4099 8.17193 13.8614 8.2647 14.2178 8.4502C14.5742 8.63574 14.833 8.89258 14.9941 9.21973C15.1551 9.54679 15.2363 9.92986 15.2363 10.3691C15.2363 10.7988 15.1553 11.1797 14.9941 11.5117C14.833 11.8437 14.5771 12.1055 14.2256 12.2959C13.8741 12.4863 13.4246 12.581 12.8779 12.5811H10.6367V8.17188H12.8633Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default PointFilled24;
