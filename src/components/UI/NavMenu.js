import React, { useState } from "react";

const NavMenuItem = (props) => {
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

const NavMenu = (props) => {
  const [menuData, setMenuData] = useState(props.menuData);

  const makeActiveTabHandler = (title) => {
    let newMenuData = [];
    for (const item of menuData) {
      if (item.title === title) {
        newMenuData.push({ ...item, isActive: true });
      } else {
        newMenuData.push({
          ...item,
          isActive: false,
        });
      }
    }
    setMenuData(newMenuData);
    props.onTabChange(newMenuData);
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
