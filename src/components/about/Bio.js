import React from "react";
import aboutPic from "../../assets/about-bio.png";

const Bio = () => {
  return (
    <div className="flex w-full flex-col gap-12 lg:flex-row mt-16">
      <img
        src={aboutPic}
        alt="coder-art"
        className="w-full h-[30vh] md:w-[80%] self-center"
      />
      <div className="flex flex-col self-center md:w-[80%]">
        <h1 className="font-black font-about text-3xl text-center">Who am I</h1>
        <p className="font-formal font-bold text-xl ">
          My name is Amir Kazemi. I Completed bachelor degree of Computer
          Engineering and master of Computer Science at University of
          Genoa,italy. I'm insterested in font-end technologies and creating
          modern,reactive and full responsive websites.
        </p>
      </div>
    </div>
  );
};

export default Bio;
