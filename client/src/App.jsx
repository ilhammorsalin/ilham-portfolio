import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import { Card } from "./components/Card";
import elamDP from "./assets/elamDP.png";
import sun from "./assets/sun scarecrow square.png";
import pulp from "./assets/pulp gif.gif";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8 max-w-4xl mx-auto space-y-12">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />

      {/* Featured Cards row */}
      <div className="flex flex-row flex-wrap justify-evenly gap-4">
        <Card image={elamDP} header="Nexus AI" text="Agentic AI concierge" btnText="View" />
        <Card image={sun} header="Bidroher Prohor" text="2D platformer game" btnText="Play" />
        <Card image={pulp} header="Digital Fridge" text="Smart recipe generator" btnText="Demo" />
      </div>

      <ContactSection />
    </div>
  );
}

export default App;
