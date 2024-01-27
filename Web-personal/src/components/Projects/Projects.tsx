let TestImg = 'https://bit.ly/2GkldBe'

import ProjectCard from './ProjectCard';
import reactIcon from '../../public/images/react.svg';
import typeScriptIcon from '../../public/images/typescript.svg';
import sassIcon from '../../public/images/sass.svg'

import reportCareImg from '../../public/images/reportcare.png'
import simpImg from '../../public/images/internshipSys.png'

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
      image: TestImg,
      icons: [reactIcon, typeScriptIcon, sassIcon]
    },
    {
      title: 'Web Development',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione illum ipsam deleniti delectus laudantium tempora aliquid officia, eligendi eveniet? Placeat odit deserunt saepe fuga, rerum voluptatum nulla aliquid dolorum?',
      image: TestImg,
      icons: [reactIcon, typeScriptIcon, sassIcon ]

    }];
  return (
    <div className='projects section' id='projects'>
      <div className='text-area'>
        <h4>PORTFOLIO</h4>
        <h2>My Masterpiece Collection</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Expedita quas facere tempore nobis, vel natus, dolor eligendi a at odit officia,
        </p>
      </div>

      <ProjectCard projects={projects} />
    </div>
  )
}

export default Project