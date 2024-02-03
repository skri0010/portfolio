import "./Skills.scss";

type SkillProps = {
  skills: {
    title: string;
    image: string;
  }[];
};

function SkillCard(props: SkillProps) {
  return (
    <div className="skills-grid">
      {props.skills.map((skill) => {
        return (
          <div className="skill-card item">
            <div className="skill-img">
              <img src={skill.image} loading="lazy"></img>
            </div>
            <div className="skill-text">
              {" "}
              <span className="text">{skill.title}</span>{" "}
            </div>
            <div className="card__inner">
              <h2>GeeksforGeeks</h2>

              <p>
                A Computer Science portal for geeks. It contains well written,
                well thought and well explained computer science and programming
                articles, quizzes and ...
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillCard;
