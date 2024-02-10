import "./styles/styles.scss";
import Header from "./components/Header/Header";
import Introduction from "./components/Body/Introduction";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Footer/Contact";
import { injectSpeedInsights } from "@vercel/speed-insights";

function App() {
  injectSpeedInsights();
  return (
    <>
      <Header></Header>
      <Introduction></Introduction>

      <Skills></Skills>

      {/* <div className='experience'>
  
            <div className='name'> List of experiences</div>
          </div> */}
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
