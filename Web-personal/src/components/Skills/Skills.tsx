import SkillCard from "./SkillCard";
import WebDevelopmentImg from "../../public/images/web-development.svg";
import MobileDevelopmentImg from "../../public/images/mobile-development.svg";
import DatabaseImg from "../../public/images/database.svg";
import DataAnalyticsImg from "../../public/images/data-analytics.svg";

import javacriptIcon from "../../public/images/skills/javascript.svg";
import cssIcon from "../../public/images/skills/css.svg";
import htmlIcon from "../../public/images/skills/html.svg";
import reactIcon from "../../public/images/skills/reactjs.svg";
import vueIcon from "../../public/images/skills/vuejs.svg";
import nodeJSIcon from "../../public/images/skills/nodejs.svg";
import laravelIcon from "../../public/images/skills/laravel.svg";
import typescriptIcon from "../../public/images/skills/typescript.svg";

import javaIcon from "../../public/images/skills/java.svg";
import appleIcon from "../../public/images/skills/apple.svg";
import androidIcon from "../../public/images/skills/android.svg";
import pwaIcon from "../../public/images/skills/pwa.svg";

import mongodbIcon from "../../public/images/skills/mongodb.svg";
import mysqlIcon from "../../public/images/skills/mysql.svg";
import sqlIcon from "../../public/images/skills/sql.svg";
import oracleIcon from "../../public/images/skills/oracle.svg";

import pythonIcon from "../../public/images/skills/python.svg";
import tableauIcon from "../../public/images/skills/tableau.svg";
import powerbiIcon from "../../public/images/skills/powerbi.svg";
import excelIcon from "../../public/images/skills/excel.svg";
import apachesparkIcon from "../../public/images/skills/apachespark.svg";

function Skills() {
  const skills = [
    {
      title: "Web Development",
      image: WebDevelopmentImg,
      icons: [
        javacriptIcon,
        htmlIcon,
        cssIcon,
        typescriptIcon,
        reactIcon,
        vueIcon,
        laravelIcon,
      ],
    },
    {
      title: "Mobile App Development",
      image: MobileDevelopmentImg,
      icons: [reactIcon, javaIcon, appleIcon, androidIcon, pwaIcon],
    },
    {
      title: "Database Management",
      image: DatabaseImg,
      icons: [mongodbIcon, sqlIcon, oracleIcon, mysqlIcon, nodeJSIcon],
    },
    {
      title: "Data Analytics",
      image: DataAnalyticsImg,
      icons: [
        pythonIcon,
        tableauIcon,
        powerbiIcon,
        excelIcon,
        sqlIcon,
        apachesparkIcon,
      ],
    },
  ];

  return (
    <div className="skills section" id="skills">
      <div className="text-area">
        <h4>SKILLS</h4>
        <h2>What I Am Great At</h2>
        <p>
          Throughout my academic journey, I have acquired a diverse set of
          skills through the practice of tools to enhance my capabilities,
          enabling me to effectively achieve my goals.
        </p>
      </div>
      <SkillCard skills={skills} />
    </div>
  );
}

export default Skills;
