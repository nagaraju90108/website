import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ho45v57",
        "template_n3b9qy2",
        e.target,
        "KCQX52q1hcl0UrwH0"
      )
      .then((res) => {
        // alert("Submitted successfully");
        toast.success("Query submit successfull!", {
          position: "top-center",
          autoClose: 1500,
        });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <ToastContainer />
      <div className="min-h-[95vh] lg:min-h-[85vh] flex flex-col items-center justify-center">
        <div className="w-72 md:w-96">
          <div className=" p-6 border bg-white border-gray-300 rounded-md">
            <form onSubmit={handleSubmit}>
              <label className="block mb-6">
                <span className="text-gray-700">Your name</span>
                <div className="myformdiv">
                  <div className="myformicon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="myforminput"
                    placeholder="Siva Naga Raju"
                    required
                  />
                </div>
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email address</span>
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
                    placeholder="siva@example.com"
                    required
                  />
                </div>
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Your Query</span>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mycontactform"
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div className="text-center">
                <button
                  type="submit"
                  className="mybtn px-10 text-sm lg:text-base hover:border-2 hover:border-mycolor hover:text-mycolor"
                >
                  CONTACT US
                  <span className="absolute">
                    <i className="fa-solid fa-arrow-right pl-5 lg:pl-4 text-right"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <i class="fa-solid fa-angles-down text-white absolute bottom-4 text-4xl animate-bounce"></i> */}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
