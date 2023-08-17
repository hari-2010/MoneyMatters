import * as React from "react";
import { IconsType } from "../../types/types";
const TransactionsIcon = (props: IconsType) => {
  const { fill = "#5B73A0" } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none">
      <g fill={fill} clipPath="url(#a)">
        <path d="M5.208 22.917A2.086 2.086 0 0 0 7.293 25h10.416a2.085 2.085 0 0 0 2.084-2.083v-.912H5.208v.912ZM19.792 2.083A2.085 2.085 0 0 0 17.708 0H7.293a2.086 2.086 0 0 0-2.083 2.083v1.042h14.583V2.083ZM24.71 6.7l-3.125-3.255-1.503 1.443 1.307 1.362h-1.598v2.083h1.71l-1.389 1.332 1.442 1.504 3.125-2.995a1.041 1.041 0 0 0 .03-1.473Z" />
        <path d="M16.667 6.25h3.125V4.167H5.208v12.5h3.126v2.083H5.209v2.083h14.583v-12.5h-3.125V6.25Zm-1.042 4.167H11.98a.52.52 0 0 0 0 1.041h1.042a2.604 2.604 0 0 1 .52 5.156v1.094H11.46v-1.041H9.375v-2.084h3.646a.52.52 0 0 0 0-1.041h-1.042a2.604 2.604 0 0 1-.52-5.157V7.292h2.083v1.041h2.083v2.084ZM3.498 16.667l1.39-1.332-1.442-1.504L.32 16.826A1.04 1.04 0 0 0 .29 18.3l3.124 3.256 1.503-1.443-1.307-1.362h1.597v-2.083h-1.71Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TransactionsIcon;
