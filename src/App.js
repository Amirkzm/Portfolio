import Header from "./components/layout/Header";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/PortfolioPage";

function App() {
  return (
    <div className="w-screen h-screen bg-white">
      <Header />
      <Homepage />
      <Portfolio />
    </div>
  );
}

export default App;
