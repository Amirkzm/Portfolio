import React from "react";
import Card from "../UI/Card";

const PortfolioItem = ({ children, title }) => {
  return (
    <Card style={{}} classname="mt-16 p-0">
      <div className="w-full h-full overflow-hidden relative group">
        <div className="card-image w-full h-full "></div>
        <span className="absolute top-[50%] text-white text-xl left-[50%] -translate-x-[50%] -translate-y-96 transition-all duration-500  group-hover:scale-125 group-hover:-translate-y-[50%]">
          {title}
        </span>
      </div>
    </Card>
  );
};

export default PortfolioItem;
