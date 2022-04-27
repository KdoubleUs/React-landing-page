import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/nav";
import Landing from "./components/Landing";
import Project from "./components/Project";
import Social from "./components/social";
import Experience from "./Pages/Experience";
import AboutMe from "./Pages/AboutMe";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Landing />
      <Social />
      <Project />
      <Experience />
      <AboutMe />
    </div>
  );
}

export default App;
