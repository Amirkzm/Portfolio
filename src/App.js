import Header from "./components/layout/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/PortfolioPage";

function App() {
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden min-w-[380px]">
      <Header />
      <Homepage />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
