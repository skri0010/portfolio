import "./Introduction.scss";
import PersonalImage from "../../public/images/personal.png";
import CV from "../../public/images/SSKrishnaCV.pdf";

function Introduction() {
  return (
    <div className="intro intro-grid" id="intro">
      <div className="contact item">
        <h1>
          Suchit
          <h1>
            Krishna<span className="gold">.</span>
          </h1>
        </h1>
        <span className="line"></span>
        <p style={{ whiteSpace: "pre-line" }}>
          {"Creating | Innovating\n Adapting | Evolving"}
        </p>
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
      </div>

      <div className="image item middle-column">
        <span className="circle"></span>
        <img src={PersonalImage} className="personal-img"></img>
      </div>
      <div className="summary item">
        <h4>INTRODUCTION</h4>
        <h2>
          Software Engineer,<br></br> Full Stack Developer
        </h2>
        <p>
          {" "}
          Software Engineering graduate passionate about exploring diverse
          avenues within the field.
        </p>
        <a className="gold" href={CV}>
          LEARN MORE {">"}
        </a>
      </div>
    </div>
  );
}

export default Introduction;
