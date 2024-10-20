import Navigation from "./components/Navigation";
import MainBlock from "./components/MainBlock";
import Projects from "./components/Projects";

function App() {
      return (
            <>
                  <Navigation />
                  <div className="main projects">
                        <MainBlock />
                        <Projects />
                  </div>
            </>
      );
}

export default App;
