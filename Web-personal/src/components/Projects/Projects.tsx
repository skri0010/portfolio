import ProjectCard from './ProjectCard';

import reactIcon from '../../public/images/react.svg';
import typeScriptIcon from '../../public/images/typescript.svg';
import mongoDbIcon from '../../public/images/mongodb.svg'
import vueIcon from '../../public/images/vuejs.svg'
import nodeJSIcon from '../../public/images/nodejs.svg'
import awsIcon from '../../public/images/aws.svg'
import htmlIcon from '../../public/images/html5.svg'
import cssIcon from '../../public/images/css3.svg'
import javacriptIcon from '../../public/images/javascript.svg'
import firebaseIcon from '../../public/images/firebase.svg'
import javaIcon from '../../public/images/java.svg'

import reportCareImg from '../../public/images/test2.png'
import simpImg from '../../public/images/test.png'
import timeTrackerImg from '../../public/images/timeTracker.png'
import covidSystemImg from '../../public/images/covidSystem.png'
import apiImg from '../../public/images/rest.svg'

function Project() {
  const projects = [
    {
      title: 'Internship Management System',
      desc: 'A website for Monash University that facilitates internship management, enabling employers to post job opportunities, students to discover and apply for internships, and teachers to monitor students internship progress',
      image: simpImg,
      icons: [mongoDbIcon, vueIcon, nodeJSIcon]
    },
    {
      title: 'GreenSHeart ReportCare Clinician',
      desc: 'A versatile mobile and web application designed for clinicians in hospital settings to efficiently oversee and monitor patients diagnosed with heart failure (HF) diseases',
      image: reportCareImg,
      icons: [reactIcon, typeScriptIcon, awsIcon]
    },
    {
      title: 'Monash Time Tracker',
      desc: 'A project management website tailored for Monash University teachers, allowing them to oversee and ensure equal contributions from students collaborating in groups to complete assignments.',
      image: timeTrackerImg,
      icons: [htmlIcon, cssIcon, javacriptIcon,firebaseIcon]
    },
    {
      title: 'Covid Test Booking System',
      desc: 'A COVID test booking app for the public to schedule tests, allowing state governments to track the total tests and record positive/negative results.',
      image: covidSystemImg,
      icons: [javaIcon, apiImg]

    }];
  return (
    <div className='projects section' id='projects'>
      <div className='text-area'>
        <h4>PORTFOLIO</h4>
        <h2>My Project Portfolio</h2>
        <p>
        My projects span across web and mobile development, incorporating a diverse range of libraries and frameworks for the frontend, coupled with intricate APIs and services for the backend.
        </p>
      </div>

      <ProjectCard projects={projects} />
    </div>
  )
}

export default Project