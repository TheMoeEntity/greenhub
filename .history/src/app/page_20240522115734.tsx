import About from "../components/About";
import FundRaisers from "../components/FundRaisers";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto">
     <Hero />
     <About />
     <FundRaisers />
    </main>
  );
}
