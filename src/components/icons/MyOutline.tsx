import * as React from "react";
import type { SVGProps } from "react";

const MyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor" // 기본값, props로 덮어쓰기 가능
    width="16"
    height="16"
    {...props}
  >
    <g id="my-outline">
<g id="my-outline_2">
<path id="Union" fillRule="evenodd" clipRule="evenodd" d="M5.375 5.375C5.375 3.92525 6.55025 2.75 8 2.75C9.44975 2.75 10.625 3.92525 10.625 5.375C10.625 6.82475 9.44975 8 8 8C6.55025 8 5.375 6.82475 5.375 5.375ZM8 2C6.13604 2 4.625 3.51104 4.625 5.375C4.625 7.23896 6.13604 8.75 8 8.75C9.86396 8.75 11.375 7.23896 11.375 5.375C11.375 3.51104 9.86396 2 8 2ZM5.375 10.25C3.92525 10.25 2.75 11.4253 2.75 12.875V13.625C2.75 13.8321 2.58211 14 2.375 14C2.16789 14 2 13.8321 2 13.625V12.875C2 11.011 3.51104 9.5 5.375 9.5H10.625C12.489 9.5 14 11.011 14 12.875V13.625C14 13.8321 13.8321 14 13.625 14H9.875C9.66789 14 9.5 13.8321 9.5 13.625C9.5 13.4179 9.66789 13.25 9.875 13.25H13.25V12.875C13.25 11.4253 12.0747 10.25 10.625 10.25H5.375Z" fill="currentColor"/>
</g>
</g>
  </svg>
);

export default MyOutline;
