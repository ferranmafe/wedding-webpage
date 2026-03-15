import type { FC, SVGProps } from "react";

export const DrinkIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M7 2h10l-2 15H9zM10 2v10M14 2v10M8 17h8v5H8z" />
  </svg>
);
