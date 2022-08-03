import React, { Fragment, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SidebarContext from "../../context/Sidebar-context";
import { data as kir } from "../../utils/sidebar-data";
import { CSSTransition } from "react-transition-group";

const Modal = ({ data }) => {
  const sidebarCtx = useContext(SidebarContext);

  const sidebarContentContainer =
    "absolute top-[20%] right-[10%] text-white text-3xl z-10 ";

  const animStr = (i) => `all 1s ease ${i * 0.5}s`;

  return (
    <CSSTransition in={sidebarCtx.isOpen} timeout={100} classNames={"sidebar"}>
      <div className="sidebar">
        <div className={sidebarContentContainer}>
          <CSSTransition
            in={sidebarCtx.isOpen}
            timeout={200}
            classNames="sidebar-content"
          >
            <ul className="sidebar-content">
              {kir.map((item, index) => {
                return (
                  <li
                    key={item.title}
                    className={
                      "flex items-center gap-4 opacity-0 scale-0 " +
                      (sidebarCtx.isOpen && " !opacity-100 !scale-100")
                    }
                    style={{
                      transition: sidebarCtx.isOpen ? animStr(index) : "",
                    }}
                  >
                    <span>{item.icon}</span>
                    <a href={item.path}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </CSSTransition>
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
