import { useContext } from "react";
import Sidebar from "./components/layout/Sidebar";
import HamburgerButton from "./components/UI/HamburgerButton";
import sidebarContext from "./context/Sidebar-context";

function App() {
  const sidebarCtx = useContext(sidebarContext);

  return (
    <div className="w-screen h-screen bg-gray-200">
      <HamburgerButton />
      <Sidebar />
    </div>
  );
}

export default App;
