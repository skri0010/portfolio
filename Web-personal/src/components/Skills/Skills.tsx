import SkillCard from './SkillCard';
import WebDevelopmentImg from '../../public/images/web-development.svg'

function Skills() {
  const skills = [
    {
      title: 'Web Development',
      image: WebDevelopmentImg
    },
    {
      title: 'Web Development',
      image: WebDevelopmentImg
    },
    {
      title: 'Web Development',
      image: WebDevelopmentImg
    },
    {
      title: 'Web Development',
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
