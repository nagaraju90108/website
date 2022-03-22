import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const LoginStatus = localStorage.getItem("LoginStatus");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  return (
    <>
      <div className="footerContainer">
        <div className="mycontainer" style={{ fontFamily: "Poppins" }}>
          <div className="">
            <p className="footerHeading">Visit website</p>
            <table className="flex justify-center">
              <tbody className="text-left">
                <tr>
                  <td>
                    <i className="fa-solid fa-house footerPageIcons"></i>
                  </td>
                  <td>
                    <Link to="/" className="footerList">
                      Home
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-solid fa-circle-info footerPageIcons"></i>
                  </td>
                  <td>
                    <Link to="/about" className="footerList">
                      About
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-solid fa-phone footerPageIcons"></i>
                  </td>
                  <td>
                    <Link to="/contact" className="footerList">
                      Contact
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i
                      className={`fa-solid ${
                        LoginStatus === "0"
                          ? "fa-arrow-right-to-bracket"
                          : "fa-user"
                      }  footerPageIcons`}
                    ></i>
                  </td>
                  <td>
                    <Link
                      to={LoginStatus === "0" ? "/signin" : "/myprofile"}
                      className="footerList"
                    >
                      {LoginStatus === "0" ? "Sign in" : "Profile"}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <section className="hrParaClass">
            <hr className="w-[80%]"></hr>
          </section>

          <div className="">
            <p className="footerHeading">Follow Us</p>
            <table className="flex justify-center">
              <tbody className="text-left">
                <tr>
                  <td>
                    <i className="fa-brands fa-facebook text-[#1446b3] footerSocialIcons"></i>
                  </td>
                  <td>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="footerList"
                    >
                      Facebook
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-brands fa-youtube text-[#ff0404] footerSocialIcons"></i>
                  </td>
                  <td>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      className="footerList"
                    >
                      YouTube
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-brands fa-twitter text-[#1d9bf0] footerSocialIcons"></i>
                  </td>
                  <td>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="footerList"
                    >
                      Twitter
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fa-brands fa-instagram text-[#f532db] footerSocialIcons"></i>
                  </td>
                  <td>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="footerList"
                    >
                      Instagram
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <section className="hrParaClass">
            <hr className="w-[80%]"></hr>
          </section>

          <div className="flex items-center justify-center">
            <div className="footerSubscribeDiv">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="footerInput"
                placeholder="Your Name"
              />

              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footerInput"
                placeholder="Email Address"
              />

              <div className="text-center pt-4">
                <button type="submit" className="footerSubscribeBtn mybtn">
                  SUBSCRIBE
                  <span className="absolute right-5">
                    <i className="fa-solid fa-arrow-right "></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="flex justify-center pt-10 pb-1 opacity-50">
          <hr className="w-[80%]"></hr>
        </section>

        <div className="text-xs pt-3 pb-3">
          Copyright @2022 | All rights reserved for <br className="sm:hidden" />{" "}
          Designer{" "}
          <strong className="text-white italic">Odugu Siva Naga Raju</strong>
        </div>

        <div className="pb-8 text-3xl xl:text-4xl space-x-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="fa-brands fa-linkedin-in hover:text-white"
          ></a>
          <a
            href="https://github.com/"
            target="_blank"
            className="fa-brands fa-github hover:text-white"
          ></a>
          <a
            href="https://telegram.org/"
            target="_blank"
            className="fa-brands fa-telegram hover:text-white"
          ></a>
          <a
            href="https://www.google.co.in/"
            target="_blank"
            className="fa-brands fa-google-plus-g hover:text-white"
          ></a>
          {/* <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-google-plus-g"></i> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
