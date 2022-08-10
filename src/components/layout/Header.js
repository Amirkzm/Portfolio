import React, { useEffect, useState } from "react";
import HamburgerButton from "../UI/HamburgerButton";
import Sidebar from "./Sidebar";
import { ReactComponent as PortfolioIcn } from "../../assets/portfolio-icon.svg";
import { useRef } from "react";

export const Header = () => {
  const headerSmallRef = useRef(null);
  const headerLargeRef = useRef(null);
  const [iconHeight, setIconHeight] = useState("");

  useEffect(() => {
    const height =
      headerLargeRef.current.clientHeight === 0
        ? headerSmallRef.current.clientHeight
        : headerLargeRef.current.clientHeight;
    setIconHeight(height / 2);
  }, []);

  return (
    <header className="h-[72px]">
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4 text-3xl font-black font-header h-[96px]">
          <h1 className="xs:hidden md:block ml-4" ref={headerLargeRef}>
            My Personal Portfolio
          </h1>
          <h1 className="md:hidden ml-4 " ref={headerSmallRef}>
            Portfolio
          </h1>
          <PortfolioIcn style={{ height: iconHeight }} />
        </div>
        <HamburgerButton />
        <Sidebar />
      </nav>
    </header>
  );
};

export default Header;
