import "./styles/styles.scss";
import Header from "./components/Header/Header";
import Introduction from "./components/Body/Introduction";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Footer/Contact";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    controls.start(inView ? "visible" : "");
  }, [inView, controls]);
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Header></Header>
        <Introduction></Introduction>

        <Skills></Skills>

        {/* <div className='experience'>
  
            <div className='name'> List of experiences</div>
          </div> */}
        <Projects></Projects>
        <Contact></Contact>
        {/* <SpeedInsights /> */}
      </motion.div>
    </>
  );
}

export default App;
