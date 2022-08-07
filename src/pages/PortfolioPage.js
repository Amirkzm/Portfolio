import React from "react";
import { portfolioData } from "../utils/data";

const Portfolio = () => {
  return (
    <section className="grid">
      {portfolioData.map(() => {
        return <div></div>;
      })}
    </section>
  );
};

export default Portfolio;
