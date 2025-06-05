import { useLocation } from "react-router-dom";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function Main() {
  const location = useLocation();

  const renderSection = () => {
    switch (location.pathname) {
      case "/":
        return <HomeSection />;
      case "/about":
        return <AboutSection />;
      case "/projects":
        return <ProjectsSection />;
      case "/contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      {renderSection()}
    </main>
  );
}

export default Main;
