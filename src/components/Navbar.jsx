import logo from "../assets/images/taxismshort.png";

function Navbar() {
  return (
    <div className="w-full min-h-[5rem] border-b border-[#0000001a] py-2 px-20 flex items-center justify-between shadow-sm fixed top-0 left-0 z-50 bg-white ">
      <div className="h-full flex justify-center items-center gap-2">
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
      <ul className="h-full flex items-center gap-10 font-semibold text-gray-700  justify-betweenm text-lg">
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
