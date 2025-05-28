import * as React from "react";
import type { SVGProps } from "react";

const HomeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor" // 기본값, props로 덮어쓰기 가능
    width="16"
    height="16"
    {...props}
  >
    <g id="home-outline">
<g id="home-outline_2">
<path id="Union" fillRule="evenodd" clipRule="evenodd" d="M8.60292 7.0502C8.60292 6.84307 8.77081 6.67517 8.97792 6.67517H12.9843L8.01241 2.93758L2.75 6.87591V13.2499H13.25V7.42523H8.97792C8.77081 7.42523 8.60292 7.25732 8.60292 7.0502ZM13.9987 6.49937L8.01342 2L2.00134 6.49937H2V14H14V6.49937H13.9987Z" fill="currentColor"/>
</g>
</g>
  </svg>
);

export default HomeOutline;
