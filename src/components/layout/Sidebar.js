import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import SidebarContext from "../../context/Sidebar-context";
import { data as sidebarContentData } from "../../utils/data";
import { CSSTransition } from "react-transition-group";

const Modal = ({ data }) => {
  const sidebarCtx = useContext(SidebarContext);

  const sidebarContentContainer =
    "absolute top-[20%] right-[25%] text-white text-3xl z-10  ";

  const animStr = (i) => `all 1s ease ${i * 0.5}s`;

  return (
    <CSSTransition in={sidebarCtx.isOpen} timeout={100} classNames={"sidebar"}>
      <div className="sidebar">
        <div className={sidebarContentContainer}>
          <ul className="sidebar-content">
            {sidebarContentData.map((item, index) => {
              return (
                <li
                  key={item.title}
                  className={
                    "flex items-center gap-4 opacity-0 scale-0" +
                    (sidebarCtx.isOpen && " !opacity-100 !scale-100")
                  }
                  style={{
                    transition: sidebarCtx.isOpen ? animStr(index) : "",
                  }}
                  onClick={sidebarCtx.toggleSidebar}
                >
                  <span>{item.icon}</span>
                  <a href={item.path} className="">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
};

const Sidebar = ({ data }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Modal data={data} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Sidebar;
