import type { FC, SVGProps } from "react";

export const GrillIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M12 2C6 2 2 8 2 12c0 4 4 10 10 10s10-6 10-10C22 8 18 2 12 2zm-5 12h10M7 16h10" />
  </svg>
);
