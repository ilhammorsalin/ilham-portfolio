import ContactMeSection from "../sections/ContactMeSection";
import ProjectsSection from "../sections/ProjectsSection";
import HeroSection from "../sections/HeroSection";

function HomePage() {
    return (
        <div className="m-3">

            <section id="home" className="mb-16">
                <HeroSection/>
            </section>

            <section>
                <ProjectsSection/>
            </section>

            <section>
                <ContactMeSection/>
            </section>

        </div>
        );
}

export default HomePage;
