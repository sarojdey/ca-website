import Slider from "../components/Home/Slider";
import Navbar from "../components/Navbar";
import img from "../assets/images/accounting.svg";
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
            Indians, salaried employees, and small businesses. We add value by
            eliminating the hassle of unnecessary paperwork and simplifying
            complicated and ever-changing tax laws for our clients. In
            today&apos;s fast-paced world, where time is of the essence, our
            objective is to provide a one-stop Accountant firm for e-filing
            income tax, GST and TDS returns, maintaining books of accounts,
            incorporating companies, providing investment and DTAA advisory—all
            from the comfort of your own home. Taxism Corporate Consultants is a
            leading CA firm based in Bhubaneswar, Odisha. Our team is composed
            of experts from various sectors who are committed to serving
            customers with professionalism and ethics. We are committed to
            providing value to our customers by offering a wide range of audit
            and assurance services, as well as bank assignments.
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center max-w-[500px]">
          <img src={img} alt="img" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-ful h-[500vh]"></div>
    </div>
  );
}

export default Home;
