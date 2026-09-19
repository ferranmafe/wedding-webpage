import { Navigation } from "./components/Navigation";
import { Home } from "./sections/home";
import { Details } from "./sections/details";
import { Rsvp } from "./sections/rsvp";
import { Footer } from "./components/Footer";
import { Timeline } from "./sections/timeline";
import { AboutUs } from "./sections/aboutUs";

function App() {
  return (
    <>
      <Navigation />

      <main className="pt-10">
        <Home />
        <AboutUs/>
        <Details />
        <Timeline />
        <Rsvp />
        <Footer />
      </main>
    </>
  );
}

export default App;
