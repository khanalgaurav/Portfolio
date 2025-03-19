import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="mx-20">
        <div className="h-screen">
          <Navbar />
          <Hero />
        </div>
        <Portfolio />
      </div>
    </>
  );
}

export default App;
