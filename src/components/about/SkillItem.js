import React from "react";

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="flex justify-between mb-2 p-4 border-2 border-gray-700 overflow-scroll rounded-lg">
      <h1 className="font-body text-xl font-black">{title}</h1>
      <progress
        value={percentage}
        max="100"
        className="text-3xl rounded-xl p-2 accent-red-600"
      >
        {percentage}%
      </progress>
    </div>
  );
};

export default SkillItem;
