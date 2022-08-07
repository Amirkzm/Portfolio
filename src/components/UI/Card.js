import React from "react";

const Card = ({ classname }) => {
  const classes =
    "bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 " + classname;
  return <div className={classes}>Card</div>;
};

export default Card;
