import SkillCard from './SkillCard';
import WebDevelopmentImg from '../../public/images/web-development.svg'
import MobileDevelopmentImg from '../../public/images/mobile-development.svg'
import DatabaseImg from '../../public/images/database.svg'

function Skills() {
  const skills = [
    {
      title: 'Web Development',
      image: WebDevelopmentImg
    },
    {
      title: 'Mobile App Development',
      image: MobileDevelopmentImg
    },
    {
      title: 'Database',
      image: DatabaseImg
    },
    {
      title: 'AI & ML',
      image: WebDevelopmentImg

    }];

  return (
    <div className='skills section' id='skills'>
      <div className='text-area'>
        <h4>SKILLS</h4>
        <h2>What I Am Great At</h2>
        <p>
        Throughout my academic journey, I have acquired a diverse set of skills through the practice of tools to enhance my capabilities, enabling me to effectively achieve my goals.
        </p>
      </div>

      <SkillCard skills={skills} />
    </div>
  );
}

export default Skills;
