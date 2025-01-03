import placeholder from "../../assets/images/placeholder.jpg";

function Slider() {
  return (
    <div className=" relative h-screen w-full bg-gray-300">
      <img
        src={placeholder}
        alt="placeholder"
        className="h-full w-full object-cover "
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#04090cea] to-[#0772a0ad]"></div>
      <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl md:text-5xl leading-[1.2]  font-medium w-[90%] md:w-[70%] lg:w-[50%]  text-gray-200 font-montserrat mt-20">
          Precision Planning for a Profitable Future.
        </h2>
        <button className="bg-gradient-to-b from-blue-500 to-blue-700 text-xl text-gray-100 px-5 py-3 rounded-full font-semibold mt-14">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Slider;
