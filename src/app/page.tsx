import About from "../components/Sections/Home/About";
import Collaborators from "../components/Sections/Home/Collaborators";
import FundRaisers from "../components/Sections/Home/FundRaisers";
import Hero from "../components/Sections/Home/Hero";
import Testimonials from "../components/Sections/Home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <Hero />
      <About />
      <FundRaisers />
      <Collaborators />
      <Testimonials />
    </main>
  );
}
