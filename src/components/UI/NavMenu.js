import React, { useState } from "react";

const NavMenuItem = (props) => {
  //   const [isActive, setIsActive] = useState(false);
  const { navTitle, isActive, OnActivateTab } = props;
  const onNavigateTabHandler = () => {
    OnActivateTab(navTitle);
  };

  return (
    <button
      onClick={onNavigateTabHandler}
      className={
        "p-4 hover:border-b-2 hover:border-black font-body font-bold text-2xl" +
        (isActive && " border-b-2 border-black")
      }
    >
      {navTitle}
    </button>
  );
};

const initialMenuData = [
  { title: "About", isActive: true },
  { title: "Skills", isActive: false },
  { title: "Social medias", isActive: false },
];

const NavMenu = (props) => {
  const [menuData, setMenuData] = useState(props.menuData);

  const makeActiveTabHandler = (title) => {
    let newMenuData = [];
    let componentToRender;
    for (const item of menuData) {
      if (item.title === title) {
        newMenuData.push({ ...item, isActive: true });
        componentToRender = item.comp;
      } else {
        newMenuData.push({
          ...item,
          isActive: false,
        });
      }
    }
    setMenuData(newMenuData);
    props.onTabChange(componentToRender);
  };

  return (
    <div className="w-[70vw] h-[50vh] mt-12 bg-slate mx-auto">
      <div className="flex justify-center">
        {menuData.map((item, index) => {
          return (
            <NavMenuItem
              key={index}
              navTitle={item.title}
              OnActivateTab={makeActiveTabHandler}
              isActive={item.isActive}
            />
          );
        })}
      </div>
      <div className="w-full h-0.5 bg-gray-700"></div>
      <div className="p-4 h-[50vh]">{props.children}</div>
    </div>
  );
};

export default NavMenu;
