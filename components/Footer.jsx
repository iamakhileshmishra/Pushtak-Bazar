import React from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Pushtak Bazar All rights reserved</p>
      <p className="icons hover">
        <Link href="https://www.instagram.com/iamakhileshmishra">
          <AiFillInstagram />
        </Link>
        <Link href="https://www.github.com/iamakhileshmishra">
          <AiOutlineGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/iamakhileshmishra">
          <AiFillLinkedin />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
