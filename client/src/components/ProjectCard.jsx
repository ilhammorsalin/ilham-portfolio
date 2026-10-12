import { useState } from "react";
import ImageCard from "@/components/ui/ImageCard";

function ProjectCard({ image_url, gif_url, link_url, caption }) {
  const [image, setImage] = useState(image_url);
  return (
    <div
      onMouseEnter={() => setImage(gif_url)}
      onMouseLeave={() => setImage(image_url)}
      onClick={() => window.open(link_url, "_blank")}>
      <ImageCard caption={caption} className="size-auto" imageUrl={image} />
    </div>
  );
}

export default ProjectCard;
