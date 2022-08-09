import React from "react";

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="flex flex-col items-center justify-between mb-4 p-4 border-2 border-gray-700 rounded-lg md:flex-row">
      <h1 className="font-body text-lg font-black ">{title}</h1>
      <progress
        value={percentage}
        max="100"
        className="text-lg rounded-xl p-2 w-[90%] h-8 md:w-[50%]"
      >
        {percentage}%
      </progress>
    </div>
  );
};

export default SkillItem;
