import "./Introduction.scss";
import PersonalImage from "../../public/images/personal.png";
import CV from "../../public/images/SSKrishnaCV.pdf";
import CardAnimation from "../CardAnimation";

function Introduction() {
  return (
    <div className="intro intro-grid" id="intro">
      <div className="contact item">
        <CardAnimation>
          <h1 style={{ whiteSpace: "pre-line" }}>
            Suchit{"\n"}Krishna<span className="gold">.</span>
          </h1>
        </CardAnimation>
        <span className="line"></span>
        <CardAnimation>
          <p style={{ whiteSpace: "pre-line" }}>
            {"Creating | Innovating\n Adapting | Evolving"}
          </p>
        </CardAnimation>
        <CardAnimation>
          <button
            className="contact-me-btn"
            id="contactMeBtn"
            onClick={() => {
              const element = document.getElementById("contacts");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            CONTACT ME
          </button>
        </CardAnimation>
      </div>

      <div className="image item middle-column">
        <span className="circle"></span>
        <img
          src={PersonalImage}
          className="personal-img"
          alt="Personal-Image"
          loading="eager"
        ></img>
      </div>
      <div className="summary item">
        <CardAnimation>
          <h4>INTRODUCTION</h4>
        </CardAnimation>
        <CardAnimation>
          <h2>
            Software Engineer,<br></br> Full Stack Developer
          </h2>
        </CardAnimation>
        <CardAnimation>
          <p>
            {" "}
            Software Engineering graduate passionate about exploring diverse
            avenues within the field.
          </p>
        </CardAnimation>
        <CardAnimation>
          <a className="gold" href={CV}>
            LEARN MORE {">"}
          </a>
        </CardAnimation>
      </div>
    </div>
  );
}

export default Introduction;
