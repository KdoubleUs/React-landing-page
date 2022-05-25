import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/nav";
import Landing from "./Pages/Landing";
import Project from "./Pages/Project";
import Social from "./components/social";
import Experience from "./Pages/Experience";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Rescroll from "./components/Rescroll";
import Footer from "./components/footer";
import Circle from "./components/circle";
function App() {
  return (
    <div className="app">
      {/* <Circle /> */}
      <Navigation />
      <Landing />
      <Social />
      <Rescroll />
      <Project />
      <Experience />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
