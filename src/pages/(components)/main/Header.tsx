import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/Vector.png";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [Toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!Toggle);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="w-full h-[10rem] flex justify-around items-center flex-col">
      <div className="w-full h-[60%] flex justify-around items-center">
        <div className="w-[18%] h-[90%] flex justify-center items-center">
          <Image src={logo} alt="logo" />
          <p className=" font-bold text-blue-500">
            NIGERIA MARITIME UNIVERSITY
          </p>
        </div>
        <div className="w-[50%] h-[90%] flex justify-around items-center max-md:hidden">
          <nav className=" font-semibold">Home</nav>
          <nav className=" font-semibold">About Us</nav>
          <nav className=" font-semibold">Contact</nav>
          <div className="w-[35%] h-[90%] justify-around items-center flex">
            <button className=" py-[0.50rem] px-6 rounded-md font-semibold border-blue-400 transition-all hover:border-none duration-500 border-2 hover:bg-blue-500 hover:text-white ">
              Login
            </button>
            <button className="py-[0.50rem] transition-all duration-500 text-white font-semibold px-6 bg-blue-500 hover:bg-transparent rounded-md hover:border-2 hover:border-blue-400 hover:text-black">
              Register
            </button>
          </div>
        </div>
        <div className="w-[32%] h-[90%] relative justify-end items-center hidden max-md:flex">
          {Toggle ? (
            <div onClick={handleToggle}>
              <MdClear size={30} />
            </div>
          ) : (
            <div onClick={handleToggle}>
              <RiMenu3Fill size={30} />
            </div>
          )}
          {Toggle ? (
            <motion.div
              className="w-[24rem] h-[24rem] z-30 right-[-2.8rem] bg-blue-400 text-white absolute top-[5.7rem]"
              initial="closed"
              animate={Toggle ? "open" : "closed"}
              variants={sidebarVariants}
            >
              <div className="w-full h-[90%] flex justify-around px-5 flex-col items-start">
                <nav className="font-semibold">Home</nav>
                <nav className="font-semibold">About Us</nav>
                <nav className="font-semibold">Contact</nav>
                <div className="w-[35%] h-[35%] justify-around flex-col items-start flex">
                  <button className="py-[0.50rem] px-6 rounded-md font-semibold border-blue-700 transition-all hover:border-none duration-500 border-2 hover:bg-blue-500 hover:text-white">
                    Login
                  </button>
                  <button className="py-[0.50rem] transition-all duration-500 text-white font-semibold px-6 bg-blue-500 hover:bg-transparent rounded-md hover:border-2 hover:border-blue-400 hover:text-black">
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-full h-[40%] bg-blue-500 flex justify-center items-center">
        <div className="w-[90%] h-full flex justify-center items-center overflow-hidden">
          <button className="py-2 px-5 bg-red-700 rounded text-white font-semibold">
            News
          </button>
          <div className="marquee">
            <p className="marquee-content text-white font-semibold ">
              CHEM 302.1 pdf ENG 300.2 pdf ENG 100.1 pdf coming-soon!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
