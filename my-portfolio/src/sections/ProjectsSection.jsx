import { useEffect, useState } from "react";
import projectData from "../assets/projectData.json";
import Card from "../components/Card";

const ProjectCard = ({ projectTitle, projectDescription, projectTechList }) => {
  return (
    <Card
      title={projectTitle}
      description={projectDescription}
      techList={projectTechList}
    />
  );
};

const ProjectsSection = () => {
  const [demo, setDemo] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    // if (demo % 2 === 0) {s
    //   setFlag(true);
    // } else {
    //   setFlag(false);
    // }

    demo % 2 === 0 ? setFlag(true) : setFlag(false);
  }, [demo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-amber-400 text-center mb-16">
          My Projects
        </h1>
        <button onClick={() => setDemo(demo + 1)}>{demo}</button>
        {flag && <h2>EVEN VALUE DETECTED !!</h2>}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              projectTitle={project.title}
              projectDescription={project.description}
              projectTechList={project.techList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
