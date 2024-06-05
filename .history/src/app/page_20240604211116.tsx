import About from "../components/Home/About";
import FundRaisers from "../components/Home/FundRaisers";
import Hero from "../components/HHero";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto">
     <Hero />
     <About />
     <FundRaisers />
    </main>
  );
}
