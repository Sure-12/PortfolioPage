import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experince from "./components/Experince";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


function App() {
  useEffect(()=>{
      Aos.init();
  },[])
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <Experince />
        <Skill/>
        <Projects/>
       <Contact/>
      </div>

    </>
  );
}

export default App;
