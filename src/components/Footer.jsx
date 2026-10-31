import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import facebook_icon from "../assets/images/icon-facebook.svg";
import twitter_icon from "../assets/images/icon-twitter.svg";
import pinterest_icon from "../assets/images/icon-pinterest.svg";
import instagram_icon from "../assets/images/icon-instagram.svg";

export function Footer() {
  return (
    <footer>
      <div className="left">
        <div className="top">
          <img src={logo} alt="" />
        </div>
        <div className="bottom">
          <ul>
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
      <div className="right">
        <div className="top">
          <ul>
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
          <p>&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
