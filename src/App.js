import Header from "./components/layout/Header";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/PortfolioPage";

function App() {
  return (
    <div className="w-screen h-screen bg-white min-w-[380px]">
      <Header />
      <Homepage />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
