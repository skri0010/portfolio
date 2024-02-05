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
      {props.skills.map((skill, index) => {
        return (
          <div className="skill-card item" key={index}>
            <div className="card__front">
              <div className="skill-img">
                <img src={skill.image} loading="lazy" alt={skill.title}></img>
              </div>
              <div className="skill-text">
                {" "}
                <span className="text">{skill.title}</span>{" "}
              </div>
            </div>
            <div className="card__inner">
              <div className="skill-icons">
                {skill.icons.map((icon, iconIndex) => {
                  return (
                    <img
                      src={icon}
                      loading="lazy"
                      alt="icon"
                      key={iconIndex}
                    ></img>
                  );
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
