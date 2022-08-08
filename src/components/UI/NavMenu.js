import React, { useState } from "react";

const NavItem = (props) => {
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
  const [menuData, setMenuData] = useState(initialMenuData);

  const makeActiveTabHandler = (title) => {
    let newMenuData = [];
    for (const item of menuData) {
      if (item.title === title) {
        newMenuData.push({ title: title, isActive: true });
      } else {
        newMenuData.push({ title: item.title, isActive: false });
      }
    }
    setMenuData(newMenuData);
  };

  return (
    <div className="w-[50vw] h-[50vh] mt-12 bg-slate mx-auto">
      <div className="flex">
        {menuData.map((item, index) => {
          return (
            <NavItem
              key={index}
              navTitle={item.title}
              OnActivateTab={makeActiveTabHandler}
              isActive={item.isActive}
            />
          );
        })}
      </div>
      <div className="w-full h-0.5 bg-gray-700"></div>
      {props.children}
    </div>
  );
};

export default NavMenu;
