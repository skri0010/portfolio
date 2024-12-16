import "./styles/styles.scss";
import Header from "./components/Header/Header";
import Introduction from "./components/Body/Introduction";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Footer/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Header></Header>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <SpeedInsights />
    </>
  );
}

export default App;
