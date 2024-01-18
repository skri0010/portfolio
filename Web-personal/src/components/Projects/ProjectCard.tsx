import './Projects.scss'

type ProjectProps = {
    projects: {
        title: string,
        image: string
    }[]
};

function ProjectCard(props: ProjectProps) {
    return (
        <div>
            {
                props.projects.map(project => {
                    return (
                    <div className='project-card'>
                        <div className='project-img'><img src={project.image}></img></div>
                        <div className='project-text'> <span className='text'>{project.title}</span> </div>
                        <div className='project-desc'> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium corporis, </p> </div>
                    </div>)
                })
            }
        </div>
    )
}

export default ProjectCard