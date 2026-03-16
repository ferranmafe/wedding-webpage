import type { FC } from "react";
import { VenueInfo } from "./components/VenueInfo";
import { Timeline } from "./components/Timeline";
export const DetailsSection: FC = () => {
  return (
    <section
      id="details"
      className="py-8 min-h-screen flex flex-col items-center bg-bg-alt"
    >
      <VenueInfo />
      <Timeline />
    </section>
  );
};
