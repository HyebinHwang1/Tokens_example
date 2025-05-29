import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const Cart2Filled24 = (
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
    <g id="cart2.filled.24">
      <g id="cart2.filled.24_2">
        <path
          id="Union"
          d="M12.0117 2C14.7731 2.00007 17.0117 4.25094 17.0117 7.02734V8.15137H22V22H2V8.15137H7V13.1875H8.25V8.29492H7.01172V7.02734C7.01172 4.2509 9.2503 2 12.0117 2ZM12.0117 3.25684C9.94065 3.25684 8.26172 4.94501 8.26172 7.02734V8.15137H15.75V13.1875H17V8.29492H15.7617V7.02734C15.7617 4.94505 14.0827 3.2569 12.0117 3.25684Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default Cart2Filled24;
