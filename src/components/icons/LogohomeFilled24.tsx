import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const LogohomeFilled24 = (
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
    <g id="logohome.filled.24">
      <g id="logohome.filled.24_2">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 2H2V22H22V2ZM12.0069 7L12.3983 7.01374C14.9361 7.17772 17.0432 9.46244 16.9993 12.0046V17H14.9544V12C14.9654 11.2461 14.6471 10.4894 14.081 9.92232C13.514 9.35526 12.7559 9.03829 12.0105 9.04837C11.2542 9.03738 10.4988 9.35526 9.93268 9.92232C9.36658 10.4894 9.04833 11.2461 9.06021 11.9963V17H7.00067V12C6.95677 9.46336 9.06936 7.17772 11.6154 7.01374L12.0069 7Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default LogohomeFilled24;
