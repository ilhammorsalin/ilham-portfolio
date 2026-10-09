import { useState } from "react";

function ProjectCard({ static_image, gif, url, caption }) {

    const [image, setImage] = useState(static_image);
    return (
        <div>
            <img className="max-w-md block w-full aspect-video object-cover" src={image}
                onMouseEnter={() => setImage(gif)}
                onMouseLeave={() => setImage(static_image)}
                onClick={() => window.open(url, "_blank")} />
            <p>{caption}</p>
        </div>
  );
}

export default ProjectCard;
