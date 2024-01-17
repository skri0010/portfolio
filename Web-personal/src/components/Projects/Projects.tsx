import WebDevelopmentImg from '../../public/images/web-development.svg';
import ProjectCard from './ProjectCard';

function Project() {
    const projects = [
        {
          title: 'Internship Management System',
          image: WebDevelopmentImg
        },
        {
          title: 'GreenSHeart ReportCare Clinician',
          image: WebDevelopmentImg
        },
        {
          title: 'Monash Time Tracker',
          image: WebDevelopmentImg
        },
        {
          title: 'Web Development',
          image: WebDevelopmentImg
    
        }];
    return (
        <div className='projects section'>
            <h4>PORTFOLIO</h4>
            <h2>My Masterpiece Collection</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita quas facere tempore nobis, vel natus, dolor eligendi a at odit officia,
            </p>
            <ProjectCard projects={projects}/>
        </div>
    )
}

export default Project