import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css";
import Footer from "../Footer";
const getDatafromLS = () => {
  const data = localStorage.getItem("UsersList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function Myprofile() {
  let SigninId = localStorage.getItem("SigninId")
    ? localStorage.getItem("SigninId")
    : null;
  const usersList = getDatafromLS();
  const LoginStatus = localStorage.getItem("LoginStatus");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const history = useHistory();
  let [fname, lname, email, password] = ["", "", "", ""];

  usersList.map((v) => {
    if (SigninId == v.myid) {
      [fname, lname, email, password] = [v.fname, v.lname, v.email, v.password];
    }
  });

  function handleLogout(e) {
    e.preventDefault();
    localStorage.setItem("LoginStatus", "0");
    localStorage.setItem("SigninId", "0");
    toast.info("Logout successfull!", {
      position: "top-center",
      autoClose: 1000,
    });
    setTimeout(() => {
      history.push("/");
      window.location.reload(false);
    }, 2000);
  }
  return (
    <>
      {LoginStatus === "0" && history.push("/signin")}
      <ToastContainer />
      <div className="w-72 sm:w-96 md:w-[450px] mx-auto min-h-[95vh] lg:min-h-[85vh] flex flex-col justify-center ">
        <div className="p-6 border bg-white border-gray-300 rounded-md">
          <div className="signUp_heading font-semibold text-xl text-mycolor text-center">
            My Profile
          </div>

          <hr className="mt-3 mb-4" />

          <div className="flex flex-col space-y-0 mb-4">
            <p className="profileItems ">First Name</p>
            <p className="profileList">{fname}</p>
          </div>
          <div className="flex flex-col space-y-0 mb-4">
            <p className="profileItems">Last Name</p>
            <p className="profileList">{lname}</p>
          </div>
          <div className="flex flex-col space-y-0 mb-4">
            <p className="profileItems">Email Address</p>
            <p className="profileList">{email}</p>
          </div>
          <div className="flex flex-col space-y-0 mb-4">
            <p className="profileItems">Password</p>
            <div className="passwordDiv">
              <input
                type={isPasswordShown ? "text" : "password"}
                value={password}
                className="text-sm
                sm:text-base font-semibold
                text-zinc-800"
                disabled
              />
              <i
                className={`fa-solid ${
                  isPasswordShown ? "fa-eye-slash" : "fa-eye"
                } cursor-pointer text-mycolor opacity-60`}
                onClick={() => setIsPasswordShown(!isPasswordShown)}
              ></i>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleLogout}
              className="mybtn mt-7 w-full px-10 text-sm lg:text-base hover:border-2 hover:border-mycolor hover:text-mycolor"
            >
              LOG OUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Myprofile;
