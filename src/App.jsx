import planets from "./data/planets";
import Starfield from "./components/Starfield";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanetSection from "./components/PlanetSection";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Loader />
      <Starfield />
      <Navbar planets={planets} />
      <main>
        <Hero />
        {planets.map((planet, index) => (
          <PlanetSection key={planet.id} planet={planet} index={index} />
        ))}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
