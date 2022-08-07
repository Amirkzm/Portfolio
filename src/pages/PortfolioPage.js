import React from "react";
import PortfolioItem from "../components/portfolio/PortfolioItem";
import { portfolioData } from "../utils/data";

const Portfolio = () => {
  return (
    <section className="grid">
      {portfolioData.map((item, index) => {
        return <PortfolioItem key={index} title={item.title} />;
      })}
    </section>
  );
};

export default Portfolio;
