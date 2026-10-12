import Ayoto from "../assets/ayoto.png";
import Gif from "../assets/aygif.gif";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 ">
        <ProjectCard
          image_url={Ayoto}
          gif_url={Gif}
          link_url="https://ayoto-furniture.vercel.app/"
          caption="My project for Ayoto"
        />

        <ProjectCard
          image_url={Ayoto}
          gif_url={Gif}
          link_url="https://ayoto-furniture.vercel.app/"
          caption="My project for Ayoto"
        />
      </div>
    </div>
  );
};

export default Projects;
