import * as React from "react";
import type { SVGProps } from "react";

const Cart2Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
    fill="currentColor" // 기본값, props로 덮어쓰기 가능
    width="17"
    height="17"
    {...props}
  >
    <g id="cart2-outline">
<g id="cart2-outline_2">
<path id="Union" fillRule="evenodd" clipRule="evenodd" d="M11.25 6C11.25 4.75736 10.2426 3.75 9 3.75C7.75736 3.75 6.75 4.75736 6.75 6V6.75H11.25V6ZM12 6.75V6C12 4.34315 10.6569 3 9 3C7.34315 3 6 4.34315 6 6V6.75H3.75H3V7.5V14.25V15H3.75H14.25H15V14.25V7.5V6.75H14.25H12ZM11.25 7.5V8.25V9V9.75H12V9L12 8.25V7.5H14.25V14.25H3.75V7.5H6V8.25V9V9.75H6.75V9L6.75 8.25V7.5H11.25Z" fill="currentColor"/>
</g>
</g>
  </svg>
);

export default Cart2Outline;
