import React from "react";
import PortfolioItem from "../components/portfolio/PortfolioItem";
import { portfolioData } from "../utils/data";

const Portfolio = () => {
  return (
    <section className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-0 md:px-16 md:w-[70%] md:mx-auto">
      {portfolioData.map((item, index) => {
        return <PortfolioItem key={index} title={item.title} />;
      })}
    </section>
  );
};

export default Portfolio;
