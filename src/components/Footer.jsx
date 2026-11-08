import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import facebook_icon from "../assets/images/icon-facebook.svg";
import twitter_icon from "../assets/images/icon-twitter.svg";
import pinterest_icon from "../assets/images/icon-pinterest.svg";
import instagram_icon from "../assets/images/icon-instagram.svg";

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container flex flex-col gap-6 text-center items-center 3xl:flex-row 3xl:justify-between">
        <div className="left flex flex-col gap-5">
          <div className="top">
            <img src={logo} alt="" />
          </div>
          <div className="bottom">
            <ul className="flex flex-col gap-2 3xl:flex-row 3xl:gap-7">
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
              <li>
                <Link>Products</Link>
              </li>
              <li>
                <Link>Support</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right flex flex-col gap-5 items-center 3xl:items-end">
          <div className="top">
            <ul className="flex gap-4">
              <li>
                <Link>
                  <img src={facebook_icon} alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={twitter_icon} alt="" />
                </Link>
              </li>
              <li>
                <Link>
                  <img src={pinterest_icon} alt="" />
                </Link>
              </li>
              <li>
                <Link>
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
