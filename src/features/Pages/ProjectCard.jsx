


const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>

      <p>{project.bio}</p>

      <div className="project-tags">
        {project.technologies.map((technology, index) => (
          <span key={index} className="project-tag">
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;