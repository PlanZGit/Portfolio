import AboutMe from "./components/AboutMe/AboutMe";
import MyWork from "./components/MyWork/MyWork";
import Plain from "./components/Plain/Plain";
import "./App.css";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="App">
      <Nav />

      <Plain>
        <AboutMe />
        <MyWork />
      </Plain>
    </div>
  );
}

export default App;
