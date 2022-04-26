import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/nav";
import Landing from "./components/Landing";
import Project from "./components/Project";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Landing />
      <Project />
    </div>
  );
}

export default App;
