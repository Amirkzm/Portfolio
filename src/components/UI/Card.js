import React from "react";

const Card = ({ classname, children, style }) => {
  const classes =
    "w-[80vw] h-[30vh] bg-white rounded-lg shadow-xl ring-1 ring-gray-900/5 mx-auto sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 " +
    classname;
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Card;
