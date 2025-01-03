import Slider from "../components/Home/Slider";
import Navbar from "../components/Navbar";
import img from "../assets/images/accounting.svg";
import data from "../assets/data/home-services.json";
import {
  MdMoney,
  MdGavel,
  MdBusinessCenter,
  MdAppRegistration,
  MdOutlineFileUpload,
  MdSupportAgent,
  MdPerson,
  MdCorporateFare,
} from "react-icons/md";

const iconMapping = {
  income_tax_icon: <MdMoney className="text-5xl text-[#00467a]" />,
  gst_icon: <MdGavel className="text-5xl text-[#00467a]" />,
  roc_icon: <MdBusinessCenter className="text-5xl text-[#00467a]" />,
  registration_icon: <MdAppRegistration className="text-5xl text-[#00467a]" />,
  e_returns_icon: <MdOutlineFileUpload className="text-5xl text-[#00467a]" />,
  consulting_icon: <MdSupportAgent className="text-5xl text-[#00467a]" />,
  individual_finance_icon: <MdPerson className="text-5xl text-[#00467a]" />,
  corporate_finance_icon: (
    <MdCorporateFare className="text-5xl text-[#00467a]" />
  ),
};

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Slider />

      <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row justify-evenly items-center gap-5  p-5 lg:p-20">
        <div className="w-full h-full flex flex-col justify-center items-center gap-7 max-w-[500px]">
          <h1 className="text-4xl font-bold uppercase text-[#00467a] font-montserrat">
            About us
          </h1>
          <p className="text-gray-500 ">
            Taxism Corporate Consultants, our team of expert Accountants, have
            developed extensive knowledge in all tax and accounting-related
            matters. We understand each client is unique, and we value their
            needs by dedicating an Accountant to every single client. We offer
            tailor-made solutions for professionals, entrepreneurs, non-resident
            Indians, salaried employees, and small businesses. Taxism Corporate
            Consultants is a leading CA firm based in Bhubaneswar, Odisha. Our
            team is composed of experts from various sectors who are committed
            to serving customers with professionalism and ethics. We are
            committed to providing value to our customers by offering a wide
            range of audit and assurance services, as well as bank assignments.
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center max-w-[500px]">
          <img src={img} alt="img" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-5 lg:p-20">
        <h1 className="text-4xl font-bold uppercase text-[#00467a] font-montserrat text-center mt-20 md:mt-5">
          Our Services
        </h1>
        <p className="text-gray-500 text-center max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          incidunt magni dolorem cumque eius sequi omnis et, provident facere
          laborum.
        </p>
        <div className="w-full h-full justify-evenly flex flex-wrap gap-10 mt-10">
          {data.map((section) => {
            return (
              <div
                className="min-h-[300px] w-[250px] bg-blue-50 shadow-md m-1 rounded-lg p-5 flex flex-col justify-center items-center gap-5 group cursor-pointer"
                key={section.id}
              >
                <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:gap-5 gap-0">
                  <div className="w-[100px] aspect-square rounded-full bg-blue-100 flex justify-center items-center">
                    {/* <MdCorporateFare className="text-5xl text-[#00467a]" /> */}
                    {iconMapping[section.icon]}
                  </div>
                  <h1 className="w-full text-xl font-bold text-[#00467a] font-montserrat text-center mt-2">
                    {section.service}
                  </h1>
                </div>
                <p className="text-gray-500 text-center text-sm  hidden group-hover:inline transform group-hover:translate-y-0 -translate-y-5 transition-all duration-100">
                  {section.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-ful h-[500vh]"></div>
    </div>
  );
}

export default Home;
