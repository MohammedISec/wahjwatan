import Logo from "../assets/logo.png";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
const Navbar = () => {
  return (
    <header
      className="w-full flex justify-between items-center  text-white"
      dir="rtl"
    >
      <nav className="flex w-full px-5 md:px-10 py-5 md:py-4 screen-max-width bg-teal-600">
        <img src={Logo} alt="wahjwatan" width={100} height={120} />
        <p className="flex md:px-5 px-2 mt-1 font-bold md:text-xl text-lg">
          وهج وطن العقارية
        </p>
        <div className="hidden md:flex mt-1 flex-1 justify-end gap-5 text-lg font-bold">
          <ul>
            <li> اتصل بنا:</li>
          </ul>
          <p>
            <a>
              {" "}
              00920002164
              <PhoneIcon style={{ fontSize: "30px", color: "white" }} />
            </a>
          </p>
        </div>
        <div className="md:hidden  mr-auto hover:text-amber-100 cursor-pointer">
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
