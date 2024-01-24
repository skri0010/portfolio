import './Projects.scss';


type ProjectProps = {
    projects: {
        title: string,
        desc: string,
        image: string
        icons: string[]
    }[]
};

function ProjectCard(props: ProjectProps) {
    return (
        <div className='project-grid'>
            {
                props.projects.map(project => {
                    return (
                        <div className='project-card item'>
                            <div className='project-img'>
                                <img src={project.image}></img>
                            </div>
                            <div className='text'>
                                <h4> {project.title}</h4>
                                <p>{project.desc}</p>
                            </div>

                            <div className='icons'>
                                {project.icons.map(icon => {
                                    return (
                                        <img src={icon}></img>
                                    )
                                })}
                            </div>

                        </div>)
                })
            }
        </div>
    )
}

export default ProjectCard