import logo from "../assets/images/taxismshort.png";
import logo2 from "../assets/images/taxism.png";
import { useEffect, useState } from "react";
function Navbar() {
  //use if need to change color on scroll

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     setIsScrolled(scrollTop > window.innerHeight * 0.8); // 80vh
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className={
        "w-full md:min-h-[4.6rem] py-2 px-4 md:px-10 lg:px-20 flex items-center justify-between shadow-sm fixed top-0 left-0 z-50 bg-gradient-to-b from-[#fafafa] to-[#ffffff] "
      }
    >
      <div className="hidden h-full md:flex justify-center items-center gap-2">
        <div className="h-[3.5rem] aspect-square ">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <div className=" text-center flex flex-col justify-center items-center ">
          <h1 className="leading-6 text-[#012b4a] uppercase text-[1.6rem] font-bruno font-medium tracking-[0.3rem] mt-2">
            TAXISM
          </h1>
          <h6 className="text-[#f86c03] text-[0.4rem] font-bold uppercase tracking-[0.18rem]">
            Corporate consultants
          </h6>
        </div>
      </div>
      <div className="h-[3rem] aspect-square md:hidden">
        <img src={logo2} alt="logo2" className="w-full h-full object-cover" />
      </div>
      <ul className="hidden h-full md:flex items-center gap-10 font-semibold text-gray-700  justify-betweenm text-lg">
        <li className="text-[#015ea0]">Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Consultant</li>
        <li>Career</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
