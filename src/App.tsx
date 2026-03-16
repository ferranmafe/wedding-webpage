import { Navigation } from "./components/Navigation";
import { HomeSection } from "./sections/home/HomeSection";
import { DetailsSection } from "./sections/details/DetailsSection";
import { RsvpSection } from "./sections/rsvp/RsvpSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />

      <main className="pt-10">
        <HomeSection />
        <DetailsSection />
        <RsvpSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
