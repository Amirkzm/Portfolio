import React, { useEffect, useState, useContext } from "react";
import HamburgerButton from "../UI/HamburgerButton";
import Sidebar from "./Sidebar";
import { ReactComponent as PortfolioIcn } from "../../assets/portfolio-icon.svg";
import { useRef } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import DarkMode from "../../context/DarkMode";

export const Header = () => {
  const headerRef = useRef(null);
  const [iconHeight, setIconHeight] = useState("");
  const darkCtx = useContext(DarkMode);

  useEffect(() => {
    const height = headerRef.current.clientHeight;
    setIconHeight((height / 2) * 1.3);
  }, []);

  return (
    <header className="h-[72px] relative">
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4 text-3xl font-black font-header h-[96px]">
          <a
            className="ml-4 text-2xl dark:text-white"
            href="#homepage"
            ref={headerRef}
          >
            Amir.
          </a>
          <PortfolioIcn
            fill={darkCtx.isDarkMode ? "#fff" : "000"}
            style={{ height: iconHeight }}
          />
          <button
            className="absolute top-[50%] right-[5%] translate-y-[50%]"
            onClick={darkCtx.changeDarkMode}
          >
            <MdDarkMode
              fill={darkCtx.isDarkMode ? "#fff" : "000"}
              style={{ height: iconHeight }}
            />
          </button>
        </div>

        <HamburgerButton />
        <Sidebar />
      </nav>
    </header>
  );
};

export default Header;
