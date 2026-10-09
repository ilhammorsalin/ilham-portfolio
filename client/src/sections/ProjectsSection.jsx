import Ayoto from "../assets/ayoto.png";
import Gif from "../assets/aygif.gif";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (

    <div>
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-1">
            <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ayoto" />
            <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ay    oto" />             <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ayoto" />
            <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ayoto" />
            <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ayoto" />
            <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ayoto" />
            <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ayoto" />
            <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ayoto" />
            <ProjectCard static_image={Ayoto} gif={Gif} url="https://ayoto-furniture.vercel.app/" caption="My project for Ayoto" />
            </div>
    </div>

    )

}

export default Projects;
