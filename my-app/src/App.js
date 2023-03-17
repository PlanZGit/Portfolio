import AboutMe from "./components/AboutMe/AboutMe";
import MyWork from "./components/MyWork/MyWork";
import Plain from "./components/Plain/Plain";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <img
        className="App-backgroundIMG"
        alt="x"
        src="https://img1.wallspic.com/previews/7/6/7/1/7/171767/171767-orange-fractal_art-pattern-colorfulness-liquid-x750.jpg"></img> */}
      <Plain>
        <AboutMe />
        <MyWork />
      </Plain>
    </div>
  );
}

export default App;
