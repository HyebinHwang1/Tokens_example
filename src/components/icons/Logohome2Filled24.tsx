import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const Logohome2Filled24 = (
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
    <g id="logohome2.filled.24">
      <g id="logohome2.filled.24_2">
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0224 2L21.9978 9.49895H22V22H2V9.49895H2.00224L12.0224 2ZM12.0069 8.24969L12.3983 8.26343C14.9361 8.42742 17.0432 10.7123 16.9993 13.2547V18.2505H14.9544V13.2501C14.9654 12.4961 14.6471 11.7394 14.081 11.1722C13.514 10.6051 12.7559 10.2881 12.0105 10.2982C11.2542 10.2872 10.4988 10.6051 9.93268 11.1722C9.36658 11.7394 9.04832 12.4961 9.06021 13.2464V18.2505H7.00067V13.2501C6.95677 10.7132 9.06936 8.42742 11.6154 8.26343L12.0069 8.24969Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default Logohome2Filled24;
