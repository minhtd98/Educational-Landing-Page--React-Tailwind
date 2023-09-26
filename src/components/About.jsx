import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="About" title2="Us?" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          deleniti recusandae qui ducimus corporis atque facilis officia quam,
          laudantium sit.
        </p>
        <Link to="contact" py={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
