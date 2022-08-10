import React from "react";
import contactImg from "../assets/contact.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="mt-80 md:mt-10 h-screen translate-y-80">
      <h1 className="text-center font-black font-header text-red-600 text-5xl mb-8">
        Contact me
      </h1>
      <div className="flex flex-col  w-[70%] items-center  mx-auto md:flex-row md:justify-center md:gap-24 md:items-start">
        <img
          src={contactImg}
          alt="contact"
          className="w-[300px] h-[30vh] clip-circle"
        />
        <div className="flex  gap-8 mt-16 text-2xl md:flex-col md:items-center">
          <div className="flex items-center gap-2">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/amir-kazemi-33667045/">
              Linkedin
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <a href="https://github.com/amir253700">GitHub</a>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <a href="mailto:kazemi.amir68@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
