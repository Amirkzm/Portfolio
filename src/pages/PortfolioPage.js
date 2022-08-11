import React from "react";
import PortfolioItem from "../components/portfolio/PortfolioItem";
import { portfolioData } from "../utils/data";

const Portfolio = () => {
  return (
    <div className="mt-16" id="portfolio">
      <h1 className="text-center font-black text-red-600 font-header text-5xl">
        Completed Projects
      </h1>
      <section className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-0 md:px-16 md:w-[100%] md:mx-auto lg:w-[90%] xl:w-[80%]">
        {portfolioData.map((item, index) => {
          return <PortfolioItem key={index} title={item.title} />;
        })}
      </section>
    </div>
  );
};

export default Portfolio;
