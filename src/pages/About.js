import React, { useState } from "react";
import NavMenu from "../components/UI/NavMenu";
import Bio from "../components/about/Bio";
import Skills from "../components/about/Skills";

const initialMenuData = [
  { title: "About", isActive: true, comp: <Bio /> },
  { title: "Skills", isActive: false, comp: <Skills /> },
];

const About = () => {
  const [menuData, setMenuData] = useState(initialMenuData);

  const showActiveContentHandler = (newMenuData) => {
    setMenuData(newMenuData);
  };

  return (
    <section className="relative mt-16" id="about">
      <h1 className="text-center font-black font-header text-red-600 text-5xl">
        About
      </h1>
      <NavMenu
        menuData={initialMenuData}
        onTabChange={showActiveContentHandler}
      >
        {menuData.map((item) => {
          return (
            <div
              className={item.isActive ? "active abouts" : "abouts"}
              key={item.title}
            >
              {item.comp}
            </div>
          );
        })}
      </NavMenu>
    </section>
  );
};

export default About;
