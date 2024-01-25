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
    <div className='skills section'>
      <div className='text-area'>
        <h4>SKILLS</h4>
        <h2>What I Am Great At</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Expedita quas facere tempore nobis, vel natus, dolor eligendi a at odit officia,
        </p>
      </div>

      <SkillCard skills={skills} />
    </div>
  );
}

export default Skills;
