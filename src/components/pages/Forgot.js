import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";

const getDatafromLS = () => {
  const data = localStorage.getItem("UsersList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Forgot() {
  const [usersList, setUsersList] = useState(getDatafromLS());
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    setFlag(false);
    usersList.map((v) => {
      if (fname === v.fname && lname === v.lname && email === v.email) {
        setFlag(true);
        setPassword(v.password);
      }
    });
    if (flag) {
      // alert('Your Password is "' + password + '"');
      toast.info('Your Password is "' + password + '"', {
        position: "top-center",
        autoClose: 4000,
      });
      setTimeout(() => {
        history.push("/signin");
      }, 5000);
    } else {
      // alert("Please enter valid credentials!");
      toast.error("Please enter valid credentials!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }
  function handleOnClick(e) {
    setFlag(false);
    usersList.map((v) => {
      if (fname === v.fname && lname === v.lname && email === v.email) {
        setFlag(true);
        setPassword(v.password);
      }
    });
  }

  return (
    <>
      <ToastContainer />
      <div className="w-72 md:w-96 mx-auto min-h-[95vh] lg:min-h-[85vh] flex flex-col justify-center">
        <div className="p-6 border bg-white border-gray-300 rounded-md">
          <div className="signUp_heading font-semibold text-xl text-mycolor">
            Forgot
          </div>
          <div className="signUp_para text-xs mt-1 ">
            Please fill in this form to get password!
          </div>
          <hr className="mt-3 mb-5" />
          <form onSubmit={handleSubmit}>
            <div className="myformdiv">
              <div className="myformicon">
                {/* <i className="fa-solid fa-user"></i> */}
                <FaRegUser />
              </div>
              <input
                name="fname"
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="myforminput"
                placeholder="First Name"
                required
              />
            </div>
            <div className="myformdiv">
              <div className="myformicon">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                name="lname"
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="myforminput"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="myformdiv">
              <div className="myformicon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="myforminput"
                placeholder="Email"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={handleOnClick}
                className="mybtn relative mt-7 w-full px-10 text-sm lg:text-base hover:border-2 hover:border-mycolor hover:text-mycolor"
              >
                GET PASSWORD
                <span className="absolute">
                  <i className="fa-solid fa-arrow-right pl-10 md:pl-20 text-right"></i>
                </span>
              </button>
              <p className="mt-4 text-sm text-center font-medium text-gray-400 ">
                Do you know password?{" "}
                <Link
                  to="/signin"
                  className="text-mycolor hover:underline focus:outline-none focus:ring-2 focus:ring-mycolor"
                >
                  Signin here.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Forgot;
