import React from "react";
import { skillsData } from "../../utils/data";
import SkillItem from "./SkillItem";
const Skills = () => {
  return (
    <div className="overflow-scroll h-full p-4">
      {skillsData.map((item) => {
        return <SkillItem title={item.title} percentage={item.percentage} />;
      })}
    </div>
  );
};

export default Skills;
