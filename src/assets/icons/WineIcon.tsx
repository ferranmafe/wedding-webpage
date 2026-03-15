import type { FC, SVGProps } from "react";

export const WineIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M6 2h12v7c0 3-3 5-6 8v5H8v-5c-3-3-6-5-6-8V2z" />
    <path d="M6 5h12" />
  </svg>
);
