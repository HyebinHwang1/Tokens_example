import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const StarFilled24 = (
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
    <g id="star.filled.24">
      <g id="star.filled.24_2">
        <path
          id="Union"
          d="M12 2C12.2422 2 12.4624 2.14012 12.5654 2.35938L15.3213 8.22949L21.4697 9.16895C21.7011 9.20443 21.8934 9.36683 21.9677 9.58887C22.0419 9.8109 21.9857 10.0561 21.8222 10.2236L17.3554 14.8018L18.4111 21.2744C18.4496 21.5105 18.3497 21.7479 18.1543 21.8857C17.9586 22.0236 17.7007 22.0377 17.4912 21.9219L12 18.8867L6.50876 21.9219C6.29929 22.0377 6.04134 22.0236 5.84567 21.8857C5.65021 21.7479 5.55036 21.5105 5.58884 21.2744L6.6445 14.8018L2.17771 10.2236C2.01421 10.0561 1.95804 9.8109 2.0322 9.58887C2.10653 9.36683 2.29882 9.20443 2.53025 9.16895L8.67868 8.22949L11.4345 2.35938C11.5375 2.14012 11.7577 2 12 2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default StarFilled24;
