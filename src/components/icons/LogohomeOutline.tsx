import * as React from "react";
import type { SVGProps } from "react";

const LogohomeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor" // 기본값, props로 덮어쓰기 가능
    width="16"
    height="16"
    {...props}
  >
    <g id="logohome-outline">
<g id="logohome-outline_2">
<path id="Union" d="M14 14H2V2H14V14ZM2.75 13.25H13.25V2.75H2.75V13.25ZM8.23926 5.00781C9.76185 5.10634 11.0263 6.47773 11 8.00293V11H9.77246V8C9.77905 7.54764 9.58868 7.09316 9.24902 6.75293C8.90882 6.41271 8.45306 6.22345 8.00586 6.22949C7.55235 6.22303 7.09928 6.413 6.75977 6.75293C6.42011 7.09316 6.22919 7.54788 6.23633 7.99805V11H5V8C4.97367 6.47802 6.24189 5.1062 7.76953 5.00781L8.00391 5L8.23926 5.00781Z" fill="currentColor"/>
</g>
</g>
  </svg>
);

export default LogohomeOutline;
