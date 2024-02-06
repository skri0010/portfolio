import "./Projects.scss";

type ProjectProps = {
  projects: {
    title: string;
    desc: string;
    image: string;
    link: string;
    icons: string[];
  }[];
};

function ProjectCard(props: ProjectProps) {
  return (
    <div className="project-grid">
      {props.projects.map((project, index) => {
        return (
          <div className="project-card item" key={index}>
            <div className="project-img">
              <a href={project.link}>
                <img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                ></img>
              </a>
            </div>
            <div className="text">
              <h4> {project.title}</h4>
              <p>{project.desc}</p>
            </div>

            <div className="icons">
              {project.icons.map((icon, iconIndex) => {
                return (
                  <img
                    src={icon}
                    loading="lazy"
                    alt="projectIcon"
                    key={iconIndex}
                  ></img>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;
