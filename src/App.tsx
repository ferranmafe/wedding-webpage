import { Navigation } from "./components/Navigation";
import { HomeSection } from "./components/HomeSection";
import { DetailsSection } from "./components/DetailsSection";
import { RsvpSection } from "./components/RsvpSection";
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
