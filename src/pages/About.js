import React, { useState } from "react";
import NavMenu from "../components/UI/NavMenu";
import Bio from "../components/about/Bio";
import Skills from "../components/about/Skills";
import SocialMedias from "../components/about/SocialMedias";
import { CSSTransition } from "react-transition-group";

const initialMenuData = [
  { title: "About", isActive: true, comp: <Bio /> },
  { title: "Skills", isActive: false, comp: <Skills /> },
  { title: "Social medias", isActive: false, comp: <SocialMedias /> },
];

const About = () => {
  const [activeComp, setActiveComp] = useState(<Bio />);
  const showActiveContentHandler = (component) => {
    setActiveComp(component);
  };

  return (
    <section>
      <NavMenu
        menuData={initialMenuData}
        onTabChange={showActiveContentHandler}
      >
        <CSSTransition
          in={activeComp !== null}
          timeout={500}
          classNames="abouts"
        >
          <div></div>
        </CSSTransition>
      </NavMenu>
    </section>
  );
};

export default About;
