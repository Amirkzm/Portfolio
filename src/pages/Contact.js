import React from "react";
import contactImg from "../assets/contact.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col w-[70vw] h-[50vh]">
      <img src={contactImg} alt="contact" />
      <div>
        <div>
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/amir-kazemi-33667045/">
            Linkedin
          </a>
        </div>
        <div>
          <FaGithub />
          <a href="https://github.com/amir253700">GitHub</a>
        </div>
        <div>
          <MdEmail />
          <a href="mailto:kazemi.amir68@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
