"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hover, setHovered] = useState<string>("");

  const [showContent, setShowContent] = useState(true);

  const navItem = ["About", "Career", "Blog", "Changelog"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 10;

      setShowContent(scrollY <= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="block fixed top-0 left-0  w-[100vw] py-6 px-[22px] box-border   before:content[''] before:blur-[12px] before:w-full before:h-full before:absolute  before:left-0 before:top-0 before:right-0 before:bg-[rgba(255,255,255,.01)] before:z-[-1]">
      <div className="flex justify-between items-center  before:content['']  before:w-[97%] before:h-[1px] before:absolute before:bottom-[-0px] before:bg-linear-gradient ">
        <div
          className={`flex gap-3 items-center cursor-pointer ${
            !showContent
              ? "opacity-0 translate-x-[-50px] transition-all transform duration-500"
              : "opacity-100 translate-x-[0px] transition-all transform duration-500"
          }`}
        >
          <Image
            src={"/icons/dimension-logo.png"}
            width={40}
            height={40}
            alt="Dimension logo"
          />
          <p className="text-white font-medium font-inter-v font-sans text-base leading-6">
            Dimension
          </p>
        </div>
        <div
          onMouseLeave={() => setHovered("")}
          className={`flex p-1 items-center  box-border overflow-x-hidden  relative transition-all duration-200 border border-1 z-[100] border-[rgba(226,232,255,.1)] rounded-full ${
            !showContent &&
            "bg-linear-gradient transition-all duration-300 ease-in-out"
          } ${!showContent ? "w-[585px]" : "w-[450px]"} `}
        >
          {navItem.map((item, key) => (
            <motion.a
              onHoverStart={() => setHovered(item)}
              key={"Navbar" + key}
              transition={{ duration: 0.7 }}
              href={"#"}
              className="py-2 px-5 group text-lg relative tracking-[.7px] transition duration-200  justify-center items-center flex text-[#e2e8ffbf]"
            >
              {hover === item && (
                <motion.span
                  layoutId="nav-item"
                  className="absolute bg-gray-100 border border-1 border-[rgba(226,232,255,.1)] bg-opacity-10  inset-0 rounded-full"
                ></motion.span>
              )}
              {item}

              {key === 1 && (
                <div className="ml-1 text-center rounded-full text-xs leading-4 bg-[rgba(226,232,255,.04)] py-[2px] px-[6px] min-w-[20px]">
                  3
                </div>
              )}
            </motion.a>
          ))}

          <div
            className={`flex gap-x-2 items-center  transition duration-300 ${
              !showContent ? "translate-x-0 " : "translate-x-[120%]"
            }`}
          >
            <div className="w-[0.5px] h-5 bg-white opacity-20"></div>
            <button className="py-[10px]  px-[14px] whitespace-nowrap mr-[2px] rounded-full text-base font-medium leading-5 font-inter-v tracking-[0.5px] bg-btn-gradient">
              Join waitlist
            </button>
          </div>
        </div>

        <button
          className={` bg-linear-gradient py-2 px-4  relative rounded-lg border-[2px] border-[rgba(226,232,255,.1)] hover:bg-gradient-to-b hover:from-[rgba(226,232,255,0)] hover:to-[rgba(226,232,255,.22)]  ${
            !showContent
              ? "opacity-0 translate-x-[50px] transition-all transform duration-500"
              : "opacity-100 translate-x-[0px] transition-all transform duration-500"
          }`}
        >
          <span className="text-[14px] leading-5 text-medium font-inter-v tracking-widest">
            Join waitlist
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
