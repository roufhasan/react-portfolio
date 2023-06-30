import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SKills from "./Components/Skills/SKills";

function App() {
  return (
    <div className="font-primary">
      <Navbar />
      <Hero />
      <SKills></SKills>
    </div>
  );
}

export default App;
