import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import facebook_icon from "../assets/images/icon-facebook.svg";
import twitter_icon from "../assets/images/icon-twitter.svg";
import pinterest_icon from "../assets/images/icon-pinterest.svg";
import instagram_icon from "../assets/images/icon-instagram.svg";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container flex flex-col gap-6 text-center items-center lg:flex-row lg:justify-between">
        <div className="left flex flex-col gap-5">
          <div className="top">
            <img src={logo} alt="" />
          </div>
          <div className="bottom">
            <ul className="flex flex-col gap-2 lg:flex-row lg:gap-7">
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  About
                </Link>
              </li>
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  Events
                </Link>
              </li>
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  Products
                </Link>
              </li>
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right flex flex-col gap-5 items-center lg:items-end">
          <div className="top">
            <ul className="flex gap-4 items-center">
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  <img src={facebook_icon} alt="" />
                </Link>
              </li>
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  <img src={twitter_icon} alt="" />
                </Link>
              </li>
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  <img src={pinterest_icon} alt="" />
                </Link>
              </li>
              <li>
                <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                  <img src={instagram_icon} alt="" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <p className="text-sm text-white/50">
              &copy; 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
