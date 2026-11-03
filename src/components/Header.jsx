import logo from "../assets/images/logo.svg";
import menu_icon from "../assets/images/icon-hamburger.svg";
export default function Header() {
  return (
    <header className="flex justify-between items-center ">
      <div className="left w-40">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <div className="menu-icon-container">
          <img src={menu_icon} alt="" />
        </div>
      </div>
    </header>
  );
}
