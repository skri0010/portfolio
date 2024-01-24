import React from 'react';
import './Projects.scss';
import reactIcon from '../../public/images/react.svg';
import typeScriptIcon from '../../public/images/typescript.svg';
import sassIcon from '../../public/images/sass.svg'

type ProjectProps = {
    projects: {
        title: string,
        image: string
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
                                <img src={'https://bit.ly/2GkldBe'}></img>
                            </div>
                            <div className='text'>
                                <h4> Monash Internship</h4> 
                                <p>A project I used to manage the clients of the clients of the customers of the patients</p>
                            </div>

                            <div className='icons'>
                                <img src={reactIcon}></img>
                                <img src={typeScriptIcon}></img>
                                <img src={sassIcon}></img>
                            </div>

                        </div>)
                })
            }
        </div>
    )
}

export default ProjectCard