import logo2 from "../assets/images/taxism.png";
import logo from "../assets/images/taxismshort.png";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const slideVariants = {
  hidden: { y: "10%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
  exit: { y: "-10%", opacity: 0 },
};

function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div
      className={
        "w-full md:min-h-[4.6rem] py-2 px-4 md:px-10 lg:px-20 flex items-center justify-between shadow-sm fixed top-0 left-0 z-50 bg-gradient-to-b from-[#fafafa] to-[#ffffff] "
      }
    >
      <div className=" h-full flex justify-center items-center gap-1 md:gap-2">
        <div className="h-[2.2rem] md:h-[3.5rem] aspect-square ">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <div className=" text-center flex flex-col justify-center items-center ">
          <h1 className="leading-6 text-[#012b4a] uppercase text-[1.3rem] md:text-[1.6rem] font-bruno font-medium tracking-[0.3rem] mt-1 md:mt-2">
            TAXISM
          </h1>
          <h6 className="text-[#f86c03] text-[0.3rem] md:text-[0.4rem] font-bold uppercase tracking-[0.18rem]">
            Corporate consultants
          </h6>
        </div>
      </div>

      <div className="md:hidden">
        <AnimatePresence mode="wait">
          {sideBar ? (
            <motion.div
              key="close-icon"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <RxCross2
                style={{ fontSize: "2.5rem" }}
                onClick={() => setSideBar(false)}
                className="text-[#012b4a]"
              />
            </motion.div>
          ) : (
            <motion.div
              key="menu-icon"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <IoMenu
                style={{ fontSize: "2.5rem" }}
                onClick={() => setSideBar(true)}
                className="text-[#012b4a]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden md:flex">
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;

export const NavLinks = () => {
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/consultant", label: "Consultant" },
    { path: "/career", label: "Career" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <ul className="flex h-full flex-col  md:flex-row items-center gap-10 font-semibold text-gray-700  justify-center text-lg ">
      {navItems.map(({ path, label }) => (
        <NavItem
          key={path}
          path={path}
          label={label}
          isActive={isActive(path)}
        />
      ))}
    </ul>
  );
};

const NavItem = ({ path, label, isActive }) => {
  return (
    <li
      className={`${
        isActive ? "text-[#015ea0]" : "text-gray-700"
      } cursor-pointer hover:scale-105 transition-all hover:-translate-y-[1px]  select-none`}
    >
      {label}
    </li>
  );
};
