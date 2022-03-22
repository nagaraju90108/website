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

function Signup() {
  const [usersList, setUsersList] = useState(getDatafromLS());
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [missmatchVisibility, setMissmatchVisibility] = useState("hidden");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  let myList = [];
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      let lis = {
        myid: 1 + Math.random(),
        fname,
        lname,
        email,
        password,
      };
      setUsersList([...usersList, lis]);
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setMissmatchVisibility("hidden");
      setSignupSuccess(true);

      toast.success("You have signed up successfully!", {
        position: "top-center",
        autoClose: 1500,
      });

      setTimeout(() => {
        history.push("/signin");
      }, 2500);
    } else {
      toast.error("Password didn't match!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("UsersList", JSON.stringify(usersList));
  }, [usersList]);

  useEffect(() => {
    password !== confirmPassword
      ? setMissmatchVisibility("visible")
      : setMissmatchVisibility("hidden");
  }, [myList]);

  function passwordMatch(e) {
    setConfirmPassword(e.target.value);
    myList.push(Math.random());
  }

  return (
    <>
      <div className="w-72 xs:w-80 sm:w-96 lg:w-[450px] mx-auto min-h-[95vh] lg:min-h-[85vh] flex flex-col justify-center">
        <div className="p-6 border bg-white border-gray-300 rounded-md">
          <div className="signUp_heading font-semibold text-xl text-mycolor">
            Sign Up
          </div>
          <div className="signUp_para text-xs mt-1 ">
            Please fill in this form to create an account!
          </div>
          <hr className="mt-3 mb-4" />
          <form onSubmit={handleSubmit}>
            <div className="myformdiv">
              <div className="myformicon">
                <FaRegUser />
              </div>
              <input
                type="text"
                name="fname"
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
                type="text"
                name="lname"
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

            <div className="passwordDiv p-0 mb-4 border-[1px] border-zinc-400 rounded-sm">
              <div className="text-center w-[16%] bg-zinc-200 bg-opacity-70 text-base sm:text-xl md:text-2xl text-mycolor opacity-60 rounded-sm">
                <i className="fa-solid fa-key "></i>
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

            <div className="passwordDiv p-0 mb-4 border-[1px] border-zinc-400 rounded-sm">
              <div className="text-center w-[16%] bg-zinc-200 bg-opacity-70 text-base sm:text-xl md:text-2xl text-mycolor opacity-60 rounded-sm">
                <i className="fa-solid fa-lock "></i>
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type={isConfirmPasswordShown ? "text" : "password"}
                value={confirmPassword}
                onChange={passwordMatch}
                className="w-[74%] h-full p-1 sm:p-2 lg:p-3 text-sm sm:text-base rounded-sm border-none active:border-mycolor focus:border-mycolor"
                required
              />
              <i
                className={`fa-solid ${
                  isConfirmPasswordShown ? "fa-eye-slash" : "fa-eye"
                } cursor-pointer m-auto text-mycolor opacity-60`}
                onClick={() =>
                  setIsConfirmPasswordShown(!isConfirmPasswordShown)
                }
              ></i>
            </div>

            <div
              className={`${[
                missmatchVisibility,
                "text-xs mt-1 pl-2 text-red-600",
              ].join(" ")}`}
            >
              * password didn't match
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mybtn mt-7 w-full px-10 text-sm lg:text-base hover:border-2 hover:border-mycolor hover:text-mycolor"
              >
                SIGN UP
              </button>
              <p className="mt-4 text-sm text-center font-medium text-gray-400 ">
                Already have an account? <br className="sm:hidden" />
                <Link
                  to="/signin"
                  className="text-mycolor hover:underline focus:outline-none focus:ring-2 focus:ring-mycolor"
                >
                  {" "}
                  Signin here.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* {signupSuccess && history.push("/signin")} */}
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Signup;
