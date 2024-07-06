import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Javascript Developer.", "FrontEnd Developer.", "BackEnd Developer."],
    loop: true,
    typeSpeed: 25,
    deleteSpeed: 15,
    delaySpeed: 2500,
  });
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="w-full  flex flex-col gap-20 text-center mx-3 my-5">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal text-white">
            WELCOME TO MY PORTFOLIO
          </h4>
          <h3 className="text-4xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-purple-500 capitalize underline gap-5">
              Kuldeep Singh Bartwal
            </span>
          </h3>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#663399"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Skilled and proficient entry level fullstack developer with
            tremendous dedication to work and a demonstrated ability in customer
            administration and satisfaction.
          </p>
        </div>

        <Media />
      </div>
    </section>
  );
};

export default Banner;
