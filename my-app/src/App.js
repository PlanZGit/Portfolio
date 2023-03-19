import AboutMe from "./components/AboutMe/AboutMe";
import MyWork from "./components/MyWork/MyWork";
import Plain from "./components/Plain/Plain";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    scrollObserve();
  }, []);
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

//IntersectionObserver is very useful for elements coming into view
const scrollObserve = () => {
  const sections = [...document.querySelectorAll("section")];
  // console.log(sectionA);
  let options = {
    root: null, //defalut is the viewport
    threshold: 0, //default is 0 , 0-1
    rootMargin: "-100px",
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      //Clear nav class
      let navLink = document.getElementById("nav-" + entry.target.id);
      navLink.className = "";

      let checkbox = document.getElementById("checkbox-" + entry.target.id);
      checkbox.checked = false;

      let title = document.getElementById("title-" + entry.target.id);
      title.style.animation = "none";

      //Set nav className
      if (entry.isIntersecting) {
        let active = document.getElementById("nav-" + entry.target.id);
        active.className = "active-nav";

        let checkbox = document.getElementById("checkbox-" + entry.target.id);
        checkbox.checked = true;

        let title = document.getElementById("title-" + entry.target.id);
        title.style.animation = "fade-in .5s 1";
      }

      // Runs once, usefully for lazy loading images.
      // observer.unobserve(entry.target);
    });
  }, options);

  sections.forEach((section, index) => {
    // console.log(section.childElementCount);

    observer.observe(section);
  });
};

export default App;
