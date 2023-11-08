import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-2xl font-bold">Hello</h1> */}
      <NavBar />
      <Home />
      <About />
      <div className="sm:h-[0px] h-[150px]  bg-[#22245D]"></div>
      <Skills />
      <div className="sm:h-[0px] h-[150px] bg-[#22245D]"></div>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
