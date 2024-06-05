import About from "../components/Home/About";
import Collaborators from "../components/Home/Collaborators";
import FundRaisers from "../components/Home/FundRaisers";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto">
      <Hero />
      <Collaborators />
      <About />
      <FundRaisers />
    </main>
  );
}
