import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
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

export function LoginStatusFun() {
  let loginStatus = localStorage.getItem("LoginStatus")
    ? localStorage.getItem("LoginStatus")
    : "0";
  return loginStatus;
}

function Signin() {
  const usersList = getDatafromLS();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setFlag(false);
    usersList.map((v) => {
      if (email === v.email && password === v.password) {
        setFlag(true);
        localStorage.setItem("SigninId", v.myid);
      }
    });
    if (flag) {
      localStorage.setItem("LoginStatus", "1");
      toast.success("Sign in successfull!", {
        position: "top-center",
        autoClose: 1000,
      });
      setTimeout(() => {
        history.push("/");
        window.location.reload(false);
      }, 2000);
    } else {
      toast.error("Please enter valid credentials!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }

  function handleOnClick(e) {
    setFlag(false);
    usersList.map((v) => {
      if (email === v.email && password === v.password) {
        setFlag(true);
      }
    });
  }

  return (
    <>
      <ToastContainer />
      <div className="min-h-[95vh] lg:min-h-[85vh] flex flex-col justify-center">
        <div className="sm:w-96 w-72 bg-white rounded-xl mx-auto overflow-hidden shadow-xl">
          <div className="h-20 bg-mycolor">
            <div className="pt-7 text-3xl text-center text-white font-bold">
              Login Here!
            </div>
          </div>
          <div className="px-10 pt-4 pb-8">
            <form className="mt-10" onSubmit={handleSubmit}>
              <div className="myformdiv">
                <div className="myformicon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="myforminput"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="passwordDiv p-0 mb-4 border-[1px] border-zinc-400 rounded-sm">
                <div className="text-center w-[16%] bg-zinc-200 bg-opacity-70 text-base sm:text-xl md:text-2xl text-mycolor opacity-60 rounded-sm">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type={isPasswordShown ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[74%] h-full p-1 sm:p-2 lg:p-3 text-sm sm:text-base rounded-sm border-none active:border-mycolor focus:border-mycolor"
                  required
                />
                <i
                  className={`fa-solid ${
                    isPasswordShown ? "fa-eye-slash" : "fa-eye"
                  } cursor-pointer m-auto text-mycolor opacity-60`}
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                ></i>
              </div>
              <button
                type="sumbit"
                onClick={handleOnClick}
                className="mybtn relative mt-8 sm:mt-16 py-2 w-full mybtn px-10 text-sm lg:text-base hover:border-2 hover:border-mycolor hover:text-mycolor"
              >
                Sign in
                <span className="absolute">
                  <i className="fa-solid fa-arrow-right pl-10 sm:pl-20 text-right"></i>
                </span>
              </button>
            </form>
            <Link
              to="/forgot"
              className="mt-8 block text-sm text-center font-medium text-mycolor hover:underline focus:outline-none focus:ring-2 focus:ring-mycolor"
            >
              Forgot your password?
            </Link>
            <p className="mt-1 text-sm text-center font-medium text-gray-400 ">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-mycolor hover:underline focus:outline-none focus:ring-2 focus:ring-mycolor"
              >
                Sign Up.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
