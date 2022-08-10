import Header from "./components/layout/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/PortfolioPage";

function App() {
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden min-w-[380px]">
      <Header />
      <section className="h-[calc(100vh_-_72px)] subsection">
        <Homepage />
        <Portfolio />
        <About />
        <Contact />
      </section>
    </div>
  );
}

export default App;
