// import contact_one from "../../assets/contact_one.svg";
// import contact_two from "../../assets/contact_two.svg";
import { useState } from "react";
import contactImg from "../../assets/contactImg.svg";
// import { MdOutlineStarPurple500 } from "react-icons/md";

// import useModalStore from "../../store/modalStore";
// import ReactGA from "react-ga4";

const SectionOne = () => {
  // const { setIsOpen } = useModalStore();

  // const trackButtonClick = () => {
  //   window.scrollTo({ top: 0, behavior: "instant" });

  //   ReactGA.event({
  //     category: "Button",
  //     action: "Click",
  //     label: "Demo/Sign Up",
  //   });
  // };

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    compEmail: "",
    compName: "",
    pnum: "",
    employees_num: "",
    customer_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="tiny:mt-[5rem] lg:mt-[9rem] mb-[4rem] grid tiny:[grid-template-columns:1fr] lg:[grid-template-columns:50fr_50fr] gap-4  w-full lg:max-w-[90em] mt-10 mb-4">
      <div className="right_column w-full h-[auto] ">
        <form action="" method="post" className="tiny:p-[2rem]  p-[4rem] w-full max-w-[100%] flex flex-col gap-8">
          <h1 className="text-2xl font-bold font-osande">Contact Us</h1>
          <div className=" w-full flex flex-col gap-3">
            <label htmlFor="fname" className="text-[#00000073] flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
              First Name
            </label>
            <input type="text" name="fname" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.fname} onChange={handleChange} />
          </div>
          <div className=" w-full flex flex-col gap-3">
            <label htmlFor="lname" className="text-[#00000073] flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
              Last Name
            </label>
            <input type="text" name="lname" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.lname} onChange={handleChange} />
          </div>
          <div className=" w-full flex flex-col gap-3">
            <label htmlFor="email" className="text-[#00000073] flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
              Email Address*
            </label>
            <input type="email" name="email" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.email} onChange={handleChange} />
          </div>
          <div className=" w-full flex flex-col gap-3">
            <label htmlFor="customer_message" className="text-[#00000073] flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
              Message*
            </label>
            <textarea name="customer_message" id="" className="bg-[#EDEDED] px-2 text-[#434343] pt-3  w-full h-[12.375em] rounded-xl" value={formData.customer_message} onChange={handleChange} />
          </div>
          <button
            onClick={() => {
              // trackButtonClick();
              // setIsOpen(true);
            }}
            className=" z-40 text-[#F3FEF6] font-graphik font-[500] text-[1.0112em] lg:text-[1.094em] leading-[17.8px] lg:leading-[23.05px]
                 bg-[#488559] w-[11.6669em] lg:w-[100%] h-[2.3887em] lg:h-[3.0744em] hover:text-[#488559]
                  hover:bg-[#FFF] hover:border hover:border-[#488559] rounded-full z-40 mx-auto lg:mx-0 ">
            Continue
          </button>
        </form>
      </div>
      <div className="w-full h-[auto] relative overflow-hidden rounded-[2rem]">
        <img src={contactImg} alt="" className="absolute right-[0] rounded-[2rem] hidden lg:block" />
      </div>
    </section>
  );
};
export default SectionOne;
