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
                        // <div className='project-card'>
                        //     <div className='test1'>
                        //         <div className='project-text'>
                        //             <span className='text'>{project.title}</span>
                        //         </div>
                        //         <div className='project-desc'>
                        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium corporis, </p>
                        //         </div>
                        //     </div>
                        //     <div className='test2'> <div className='project-img'><img src={'https://bit.ly/2GkldBe'}></img></div></div>
                            
                        // </div>)
                        <div className='project-card'>
                            <div className='image'>

                            </div>
                            <div className='text-area'></div>
                            <div className='icons'></div>
                            
                        </div>)
                })
            }
        </div>
    )
}

export default ProjectCard