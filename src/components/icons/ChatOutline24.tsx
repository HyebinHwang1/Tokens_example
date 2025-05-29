import * as React from "react";
import type { SVGProps } from "react";
import { size } from "./constants";

const ChatOutline24 = (
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
    <g id="chat.outline.24">
      <g id="chat.outline.24_2">
        <path
          id="Union"
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H2V12C2 6.47715 6.47715 2 12 2ZM12 3.25C7.16751 3.25 3.25 7.16751 3.25 12V20.75H12C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25ZM8.25 10.75C8.94036 10.75 9.5 11.3096 9.5 12C9.5 12.6904 8.94036 13.25 8.25 13.25C7.55964 13.25 7 12.6904 7 12C7 11.3096 7.55964 10.75 8.25 10.75ZM12.625 10.75C13.3154 10.75 13.875 11.3096 13.875 12C13.875 12.6904 13.3154 13.25 12.625 13.25C11.9346 13.25 11.375 12.6904 11.375 12C11.375 11.3096 11.9346 10.75 12.625 10.75ZM17 10.75C17.6904 10.75 18.25 11.3096 18.25 12C18.25 12.6904 17.6904 13.25 17 13.25C16.3096 13.25 15.75 12.6904 15.75 12C15.75 11.3096 16.3096 10.75 17 10.75Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default ChatOutline24;
