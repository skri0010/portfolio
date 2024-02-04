import "./Skills.scss";

type SkillProps = {
  skills: {
    title: string;
    image: string;
    icons: string[];
  }[];
};

function SkillCard(props: SkillProps) {
  return (
    <div className="skills-grid">
      {props.skills.map((skill) => {
        return (
          <div className="skill-card item">
            <div className="card__front">
              <div className="skill-img">
                <img src={skill.image} loading="lazy"></img>
              </div>
              <div className="skill-text">
                {" "}
                <span className="text">{skill.title}</span>{" "}
              </div>
            </div>
            <div className="card__inner">
              <div className="skill-icons">
                {skill.icons.map((icon) => {
                  return <img src={icon} loading="lazy"></img>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillCard;
