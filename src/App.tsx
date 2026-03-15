import { Navigation } from "./components/Navigation";
import { HomeSection } from "./components/HomeSection";
import { DetailsSection } from "./components/DetailsSection";
import { RsvpSection } from "./components/RsvpSection";

function App() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        <HomeSection />
        <DetailsSection />
        <RsvpSection />
      </main>
    </>
  );
}

export default App;
