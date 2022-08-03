import React, { Fragment, useContext, useState } from "react";
import SidebarContext from "../../context/Sidebar-context";
import { CSSTransition } from "react-transition-group";
import { data as kir } from "../../utils/sidebar-data";

const DATA = [
  { title: "title1", place: "first" },
  { title: "title2", place: "second" },
  { title: "title3", place: "thirth" },
  { title: "title4", place: "fourth" },
];

const InnerComponent = ({ children }) => {
  const [showtransition, setShowTransition] = useState(false);

  const toggleTransition = () => {
    setShowTransition((prev) => !prev);
  };

  return (
    <Fragment>
      <CSSTransition in={showtransition} timeout={100} classNames={"sidebar"}>
        <div className="sidebar">
          <div className="absolute top-[20%] right-[10%] text-white text-3xl z-10 ">
            <CSSTransition
              in={showtransition}
              timeout={6000}
              classNames="sidebar-content"
            >
              <ul className="sidebar-content">
                {DATA.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-4">
                      <a href="#">{item.place}</a>
                      <a href="#">{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </CSSTransition>
          </div>
        </div>
      </CSSTransition>
      <button
        onClick={toggleTransition}
        style={{ backgroundColor: "orangeRed", padding: "4px", margin: "10px" }}
      >
        {!showtransition ? "open" : "close"}
      </button>
    </Fragment>
  );
};

export const Test = () => {
  return (
    <div className="test">
      <InnerComponent />
    </div>
  );
};

export default Test;
