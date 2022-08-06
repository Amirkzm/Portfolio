import React, { Fragment, useContext } from "react";
import sidebarContext from "../../context/Sidebar-context";

export const HamburgerButton = () => {
  const sidebarCtx = useContext(sidebarContext);

  const toggleSidebarHandler = () => {
    sidebarCtx.toggleSidebar();
  };

  const baseStyle = "w-12 h-1 bg-black mb-2 transition-all duration-1000 ";
  const topLine = "rotate-45 translate-y-4 bg-red-400";
  const botLine = "-rotate-45 -translate-y-2 bg-red-400";
  const midLane = " opacity-0";

  return (
    <Fragment>
      <button
        className="flex flex-col items-center w-max h-max m-4 mt-8  z-10"
        onClick={toggleSidebarHandler}
      >
        <span className={baseStyle + (sidebarCtx.isOpen && topLine)}></span>
        <span className={baseStyle + (sidebarCtx.isOpen && midLane)}></span>
        <span className={baseStyle + (sidebarCtx.isOpen && botLine)}></span>
      </button>
    </Fragment>
  );
};

export default HamburgerButton;
