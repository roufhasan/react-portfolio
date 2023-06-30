import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import SKills from "./Components/Skills/SKills";

function App() {
  return (
    <div className="font-primary">
      <Navbar />
      <Hero />
      <SKills></SKills>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
