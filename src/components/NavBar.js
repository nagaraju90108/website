import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./NavBar.css";

function NavBar() {
  if (!localStorage.getItem("LoginStatus")) {
    localStorage.setItem("LoginStatus", "0");
  }
  if (!localStorage.getItem("UsersList")) {
    localStorage.setItem("UsersList", "[]");
  }
  if (!localStorage.getItem("SigninId")) {
    localStorage.setItem("SigninId", "0");
  }

  const LoginStatus = localStorage.getItem("LoginStatus");
  const [isSlidebarVisible, setIsSlidebarVisible] = useState(false);
  const openedClass = "right-0";
  const closedClass = "-right-[100vh] hidden";
  const handleCloseBar = () => {
    setIsSlidebarVisible(!isSlidebarVisible);
  };
  return (
    <>
      <div className="fixed sm:static w-full sm:max-w-screen z-10">
        <div
          className="bg-[#15182b] border-b-[1px] sm:border-hidden sm:bg-transparent flex flex-row justify-between items-center text-white"
          style={{ fontFamily: "Poppins" }}
        >
          <Link to="/" className="navBarLogo">
            <img src={logo} alt="Logo" />
          </Link>
          <nav className="navBarDesktop">
            <ul className="navBarList ">
              <li>
                <NavLink
                  to="/"
                  activeStyle={{ color: "#ff7200" }}
                  exact={true}
                  className="mynav"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeStyle={{ color: "#ff7200" }}
                  className="mynav"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeStyle={{ color: "#ff7200" }}
                  className="mynav"
                >
                  CONTACT
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ color: "#ff7200" }}
                  to={LoginStatus === "0" ? "/signin" : "/myprofile"}
                  className="mynav"
                >
                  {LoginStatus === "0" ? "SIGN IN" : "PROFILE"}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="menuBars">
            <i
              className="fa-solid fa-bars cursor-pointer"
              onClick={handleCloseBar}
            ></i>
          </div>
        </div>

        <div
          className={`${
            isSlidebarVisible ? "block" : "hidden"
          } w-screen select-none sm:hidden h-screen bg-black bg-opacity-70 absolute top-0 right-0 `}
        >
          <div
            className={`${
              isSlidebarVisible ? openedClass : closedClass
            } menuBarContainer sm:hidden h-screen w-2/3 xs:w-1/2 absolute top-0 bg-footercolor text-white`}
          >
            <div className="flex flex-col">
              <div className="text-right bg-[#323247] pr-5 py-3 text-2xl xs:text-3xl">
                <i
                  className="fa-solid fa-xmark cursor-pointer"
                  onClick={handleCloseBar}
                ></i>
              </div>
              <div className="mt-7 px-3 ">
                <div className="">
                  <NavLink
                    to="/"
                    exact={true}
                    activeStyle={{ backgroundColor: "#ff730065" }}
                    className="menuBarRow"
                    onClick={handleCloseBar}
                  >
                    <div className="menuBarIcons">
                      <i className="fa-solid fa-house"></i>
                    </div>
                    <p className="menuBarRowCells">Home</p>
                  </NavLink>
                  <NavLink
                    to="/about"
                    activeStyle={{ backgroundColor: "#ff730065" }}
                    className="menuBarRow"
                    onClick={handleCloseBar}
                  >
                    <div className="menuBarIcons">
                      <i className="fa-solid fa-circle-info"></i>
                    </div>
                    <p className="menuBarRowCells">About</p>
                  </NavLink>
                  <NavLink
                    to="/contact"
                    activeStyle={{ backgroundColor: "#ff730065" }}
                    className="menuBarRow"
                    onClick={handleCloseBar}
                  >
                    <div className="menuBarIcons">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <p className="menuBarRowCells">Contact</p>
                  </NavLink>
                  <NavLink
                    to={LoginStatus === "0" ? "/signin" : "/myprofile"}
                    activeStyle={{ backgroundColor: "#ff730065" }}
                    className="menuBarRow"
                    onClick={handleCloseBar}
                  >
                    <i
                      className={`fa-solid ${
                        LoginStatus === "0"
                          ? "fa-arrow-right-to-bracket"
                          : "fa-user"
                      }  menuBarIcons`}
                    ></i>
                    <p className="menuBarRowCells">
                      {LoginStatus === "0" ? "Signin" : "My Profile"}
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink
              to="/myprofile"
              activeStyle={{ backgroundColor: "#000" }}
              onClick={handleCloseBar}
              className="flex w-full justify-center absolute bottom-0 bg-[#323247] py-4 hover:bg-black"
            >
              <div className="flex text-center ">
                <p className="text-xl pr-4">
                  <i className="fa-solid fa-user"></i>
                </p>
                <p className="w-full m-auto text-left font-semibold text-xl justify-items-center">
                  Profile
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
