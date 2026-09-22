import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <div
        aria-hidden
        className="grain-overlay pointer-events-none fixed inset-0 z-[100] opacity-[0.04]"
      />
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
