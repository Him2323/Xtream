import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Xstream is one of the most successful on-demand streaming services
          that exist today. When it comes to video on-demand, Xstream has
          created a revolution in the field of digital content. It has a major
          market in the entertainment section ranging from movies and TV shows
          to gaming consoles. Xstream has gained huge response and audience
          because it has the ability to stream media on almost all the
          electronic devices, be it laptop, PCs, mobile or televisions,
          providing entertainment on the go with a very economic rent. Xstream
          uses Dynamic Streaming over HTTP protocol for streaming media.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <Link
            to="https://www.linkedin.com/in/himanshu-shirodkar-ab2678188/"
            target="blank"
            style={{ color: "white" }}
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </Link>
          <Link
            className="icon"
            to="https://github.com/Him2323"
            target="blank"
            style={{ color: "white" }}
          >
            <span>
              <FaGithub />
            </span>
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
