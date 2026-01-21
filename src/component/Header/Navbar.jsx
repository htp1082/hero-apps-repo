import React from "react";
import { Link, NavLink } from "react-router";
import navImg from "../../assets/logo.png"
import "./Navbar.css"
import mygithub from "../../assets/github.png"
const Navbar = () => {

    const navLink =(<>
       <NavLink to={'/'} className={ ({isActive}) => isActive? "navLink-active ml-8 text-[16px]":"ml-8 text-[16px]"}><li>Home</li></NavLink>
         <NavLink to={'apps'} className={({isActive}) => isActive? "navLink-active ml-10 text-[16px]":"ml-10 text-[16px]"}><li>Apps</li></NavLink>
         <NavLink to={'instalation'}className={({isActive}) => isActive? "navLink-active ml-10 text-[16px]":"ml-10 text-[16px]"}><li>Instalation</li></NavLink>
    </>)
  return (
    <div>
      <div className="navbar max-w-[1400px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            {navLink}
            </ul>
          </div>
          <img className="w-[30px] h-[30px]" src={navImg} alt="logo" />
          <h2 className="btn btn-ghost text-xl simple-gardient ">Hero.Io</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn simple-gardient  gardient"><img className="h-5 w-5" src={mygithub} alt="" srcset="" /> <a href="https://github.com/htp1082" target="/">Contribute</a></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
