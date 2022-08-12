import { useContext, useEffect } from "react";
import Header from "./components/layout/Header";
import DarkMode from "./context/DarkMode";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/PortfolioPage";

function App() {
  const darkCtx = useContext(DarkMode);

  useEffect(() => {
    console.log("darkmode is:", darkCtx.isDarkMode);
    const darkmode = darkCtx.isDarkMode;
    const html = document.getElementById("html");
    if (darkmode) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.remove("dark");
    }
  }, [darkCtx.isDarkMode]);

  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden min-w-[380px] dark:bg-slate-900 ">
      <Header />
      <section className="h-[calc(100vh_-_72px)] subsection snap-y snap-mandatory overflow-scroll scroll-smooth">
        <Homepage />
        <Portfolio />
        <About />
        <Contact />
      </section>
    </div>
  );
}

export default App;
