import React, { useState } from "react";
import "./Navbar.scss";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { RiBuilding2Fill } from "react-icons/ri";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between h-[100px] items-center">
        <div className="left">
          <a href="/" className="Logo">
            <RiBuilding2Fill className="Icon" />
            <span>Greenfield</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="Right">
          <a href="/" className="SetUP">
            Sign in
          </a>
          <a href="/" className="register SetUP">
            Sign up
          </a>
          <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
            {open ? <BiX className="Icon text-white" /> : <BiMenuAltRight className="Icon" />}
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
