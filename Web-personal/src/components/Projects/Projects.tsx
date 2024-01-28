import ProjectCard from './ProjectCard';
import reactIcon from '../../public/images/react.svg';
import typeScriptIcon from '../../public/images/typescript.svg';
import sassIcon from '../../public/images/sass.svg'

import reportCareImg from '../../public/images/test2.png'
import simpImg from '../../public/images/test.png'
import timeTrackerImg from '../../public/images/timeTracker.png'
import covidSystemImg from '../../public/images/covidSystem.png'

function Project() {
  const projects = [
    {
      title: 'Internship Management System',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione illum ipsam deleniti delectus laudantium tempora aliquid officia, eligendi eveniet? Placeat odit deserunt saepe fuga, rerum voluptatum nulla aliquid dolorum?',
      image: simpImg,
      icons: [reactIcon, typeScriptIcon, sassIcon]
    },
    {
      title: 'GreenSHeart ReportCare Clinician',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione illum ipsam deleniti delectus laudantium tempora aliquid officia, eligendi eveniet? Placeat odit deserunt saepe fuga, rerum voluptatum nulla aliquid dolorum?',
      image: reportCareImg,
      icons: [reactIcon, typeScriptIcon, sassIcon]
    },
    {
      title: 'Monash Time Tracker',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione illum ipsam deleniti delectus laudantium tempora aliquid officia, eligendi eveniet? Placeat odit deserunt saepe fuga, rerum voluptatum nulla aliquid dolorum?',
      image: timeTrackerImg,
      icons: [reactIcon, typeScriptIcon, sassIcon]
    },
    {
      title: 'Covid Test Booking System',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione illum ipsam deleniti delectus laudantium tempora aliquid officia, eligendi eveniet? Placeat odit deserunt saepe fuga, rerum voluptatum nulla aliquid dolorum?',
      image: covidSystemImg,
      icons: [reactIcon, typeScriptIcon, sassIcon]

    }];
  return (
    <div className='projects section' id='projects'>
      <div className='text-area'>
        <h4>PORTFOLIO</h4>
        <h2>My Masterpiece Collection</h2>
        <p>
        My projects span across web and mobile development, incorporating a diverse range of libraries and frameworks for the frontend, coupled with intricate APIs and services for the backend.
        </p>
      </div>

      <ProjectCard projects={projects} />
    </div>
  )
}

export default Project