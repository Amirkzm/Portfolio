import React, { useState } from "react";
import NavMenu from "../components/UI/NavMenu";
import Bio from "../components/about/Bio";
import Skills from "../components/about/Skills";
import SocialMedias from "../components/about/SocialMedias";

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
    <section className="relative">
      <NavMenu
        menuData={initialMenuData}
        onTabChange={showActiveContentHandler}
      >
        {menuData.map((item) => {
          return (
            <div className={item.isActive ? "active abouts" : "abouts"}>
              {item.comp}
            </div>
          );
        })}
      </NavMenu>
    </section>
  );
};

export default About;
