import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <ul className="flex-container justify-links">
        <Link to="https://www.facebook.com/zuck/?locale=sv_SE">
          <li className="links-style" id="facebook">
            <AiOutlineFacebook size={40} />
          </li>
        </Link>
        <Link to="https://www.instagram.com/iamzlatanibrahimovic/">
          {/* <p className="p-style">|</p> */}
          <li className="links-style" id="instagram">
            <AiOutlineInstagram size={40} />
          </li>
        </Link>
        <Link to="https://twitter.com/elonmusk">
          {/* <p className="p-style">|</p> */}
          <li className="links-style" id="twitter">
            <CiTwitter size={40} />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
