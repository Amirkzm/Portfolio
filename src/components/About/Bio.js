import React from "react";
import aboutPic from "../../assets/about-bio.png";

const Bio = () => {
  return (
    <div>
      <img src={aboutPic} alt="coder-art" />
      <div className="flex justify-around">
        <h2>I create single page applications</h2>
        <p>
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
