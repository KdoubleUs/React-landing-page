import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/nav";
import Landing from "./components/Landing";
import Project from "./components/Project";
import Social from "./components/social";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Landing>
        <Social />
      </Landing>
      <Social />
      <Project />
    </div>
  );
}

export default App;
