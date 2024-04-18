import React, { useState } from "react";
import Header from "../../Header";
import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Fade } from 'react-awesome-reveal';
import { RoughNotation } from "react-rough-notation";
import axios from "axios";
import ErrorPopup from "./ErrorPopup";
import SuccessPopup from "./SuccessPopup";

const App = () => {
  const [Values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (Values.name === "" || Values.email === "" || Values.message === "") {
      setError("Please fill all the fields 😒");
      setShowErrorPopup(true);
      setTimeout(() => {
        setError("");
        setShowErrorPopup(false);
      }, 1500);
    } else {
      try {
        await axios.post("http://localhost:2000/api/v1/post", Values);
        setShowSuccessPopup(true);
        setValues({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.log(error)
        setError("An error occurred. Please try again later.");
        setShowErrorPopup(true);
        setTimeout(() => {
          setError("");
          setShowErrorPopup(false);
        }, 1500);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="text-black h-auto">
        <Header />
        <div className=" max-w-6xl mx-auto py-[2rem] mt-[1rem] mb-[4rem] px-5 flex lg:items-center  flex-col lg:flex-row lg:gap-[10rem] gap-[2rem]">
        {showErrorPopup && <ErrorPopup message={error} onClose={() => setShowErrorPopup(false)} />}
        {showSuccessPopup && <SuccessPopup message="Thank you so much! 😊" onClose={() => setShowSuccessPopup(false)} />}
        <Fade Fade direction="up" duration={1000}>
            <div className="max-w-[300px]">
              <RoughNotation
                show="underline"
                animationDelay={400}
                animationDuration={500}
                className="text-[2.5rem] font-bold"
              >
                Get in touch
              </RoughNotation>
              <p className="py-5">
                I'm always curious to hear about collaboration opportunities.
                Let's get in touch!
              </p>
              <a href="mailto:riteshky19@gmail.com">
                <button className="p-[1rem] rounded-2xl bg-[#131920] flex items-center gap-3">
                  <EnvelopeIcon className="h-10 bg-green-400 p-2 rounded-full" />
                  <span className="font-bold text-white">
                    riteshky19@gmail.com
                  </span>
                </button>
              </a>
            </div>
          
            <form
              onSubmit={submit}
              className="w-full lg:w-[600px] py-10 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <input
                type="text"
                placeholder="Your name"
                className="input-form"
                name="name"
                value={Values.name}
                onChange={change}
              />
              <input
                type="email"
                placeholder="Your email"
                className="input-form"
                name="email"
                value={Values.email}
                onChange={change}
              />
              <textarea
                placeholder="Message"
                className="input-form max-w-full h-[150px] sm:col-span-2"
                name="message"
                value={Values.message}
                onChange={change}
              />
      
              <button
                type="submit"
                className={`bg-gray-400' : 'bg-black h-[45px] flex items-center justify-center gap-2 duration-200 transition-all hover:bg-[#0a0a0a] ${
                  loading ? "bg-gray-800 opacity-60" : "bg-black"} text-white rounded-md`}
                disabled={loading}
              >
                <span>{loading ? "Message Sending..." : "Send"}</span>{" "}
                <ArrowUpRightIcon className="h-5 text-white" />
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default App;
