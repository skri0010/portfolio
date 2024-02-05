import ProjectCard from "./ProjectCard";

import reactIcon from "../../public/images/projects/react.svg";
import typeScriptIcon from "../../public/images/projects/typescript.svg";
import mongoDbIcon from "../../public/images/projects/mongodb.svg";
import vueIcon from "../../public/images/projects/vuejs.svg";
import nodeJSIcon from "../../public/images/projects/nodejs.svg";
import awsIcon from "../../public/images/projects/aws.svg";
import htmlIcon from "../../public/images/projects/html5.svg";
import cssIcon from "../../public/images/projects/css3.svg";
import javacriptIcon from "../../public/images/projects/javascript.svg";
import firebaseIcon from "../../public/images/projects/firebase.svg";
import javaIcon from "../../public/images/projects/java.svg";

import reportCareImg from "../../public/images/projects/test2.png";
import simpImg from "../../public/images/projects/test.png";
import timeTrackerImg from "../../public/images/projects/timeTracker.png";
import covidSystemImg from "../../public/images/projects/covidSystem.png";
import apiImg from "../../public/images/projects/rest.svg";

function Project() {
  const projects = [
    {
      title: "Internship Management System",
      desc: "A streamlined internship platform where employers post opportunities, students apply, and teachers monitor internships",
      image: simpImg,
      link: "https://github.com/skri0010/Internship-Management-System",
      icons: [mongoDbIcon, vueIcon, nodeJSIcon],
    },
    {
      title: "GreenSHeart ReportCare Clinician",
      desc: "A mobile and web application designed for clinicians to efficiently monitor patients diagnosed with heart failure diseases",
      image: reportCareImg,
      link: "https://github.com/skri0010/reportcare-clinician",
      icons: [reactIcon, typeScriptIcon, awsIcon],
    },
    {
      title: "Monash Time Tracker",
      desc: "A project management website for Monash University teachers to oversee student group assignments and ensure equal contributions",
      image: timeTrackerImg,
      link: "https://github.com/skri0010/Monash-Time-Tracker",
      icons: [htmlIcon, cssIcon, javacriptIcon, firebaseIcon],
    },
    {
      title: "Covid Test Booking System",
      desc: "A COVID test booking app for the public to schedule tests, allowing state governments to track the total tests and record results",
      image: covidSystemImg,
      link: "https://github.com/skri0010/Covid-Booking-System",
      icons: [javaIcon, apiImg],
    },
  ];
  return (
    <div className="projects section" id="projects">
      <div className="text-area">
        <h4>PORTFOLIO</h4>
        <h2>My Project Portfolio</h2>
        <p>
          My projects span across web and mobile development, incorporating a
          diverse range of libraries and frameworks for the frontend, coupled
          with intricate APIs and services for the backend.
        </p>
      </div>

      <ProjectCard projects={projects} />
    </div>
  );
}

export default Project;
