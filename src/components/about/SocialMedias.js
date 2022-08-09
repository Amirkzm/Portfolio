import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="flex flex-col text-3xl md:flex-row md:justify-around">
      <div className="flex gap-4 justify-center border-2 rounded-lg mb-4 h-16 p-2">
        <FaLinkedin />
        <a href="https://www.linkedin.com/in/amir-kazemi-33667045/">Linkedin</a>
      </div>
      <div className="flex gap-4 justify-center border-2 rounded-lg h-16 p-2">
        <FaGithub />
        <a href="https://www.linkedin.com/in/amir-kazemi-33667045/">GitHub</a>
      </div>
    </div>
  );
};

export default SocialMedias;
