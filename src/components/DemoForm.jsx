import { NavLink } from "react-router-dom";
// import logo from "../assets/LOGO.svg";
import { FaTimes } from "react-icons/fa";
// import form_img from "../assets/form_img.svg";
import demo_form_img from "../assets/webImg.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import useModalStore from "../store/modalStore";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import new_logo from "../assets/newLogo.png";

const DemoForm = () => {
  const { isOpen, setIsOpen } = useModalStore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  const recaptchaRef = useRef(null); // Reference for the reCAPTCHA component

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    compEmail: "",
    compName: "",
    pnum: "",
    employees_num: "",
    customer_message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const validateForm = () => {
    const { fname, lname, compEmail, compName, pnum, employees_num } = formData;
    if (!fname || !lname || !compEmail || !compName || !pnum || !employees_num) {
      setError("Please fill required fields.");
      setErr(true);
      return false;
    }
    if (!captchaValue) {
      setError("Please verify the reCAPTCHA.");
      setErr(true);
      return false;
    }
    setError("");
    return true;
  };

  const handleClearForm = () => {
    setFormData({
      fname: "",
      lname: "",
      compEmail: "",
      compName: "",
      pnum: "",
      employees_num: "",
      customer_message: "",
    });

    recaptchaRef.current.reset(); // Reset the reCAPTCHA field
    setError(""); // Clear any validation errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch("https://api.quickmynt.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaValue }),
      });
      const result = await response.json();

      console.log(result);

      if (result.status === 200) {
        setSuccess(true);
        setLoading(false);
        handleClearForm();
      } else {
        setError(result.message);
        setErr(true);
        setLoading(false);
      }
    } catch (error) {
      setError("Error sending email:" + error);
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    const removeMsg = () => {
      if (success) {
        setSuccess(false);
      }

      if (err) {
        setErr(false);
      }
    };

    const timer = setTimeout(removeMsg, 2000);

    return () => clearTimeout(timer);
  }, [success, err]);

  const ReportComponent = () => {
    return (
      <div className="fixed z-[1000000] flex justify-center items-center h-full w-full bg-[rgba(0,0,0,.1)]">
        <div className="shadow-lg rounded-lg h-[20em] w-[350px] my-auto bg-white flex flex-col justify-center items-center gap-4">
          {success && <IoIosCheckmarkCircle color="#488559" className={`h-4 w-4 transition-all duration-500 ${success && "h-[120px] w-[120px]"} `} />}
          {err && <FaCircleXmark color="#FF0000" className={`h-4 w-4 transition-all duration-500 ${err && "h-[120px] w-[120px]"} `} />}
          <p className={`font-osande font-[800] lg:font-[900] text-[1em] lg:text-[1.5em] ${success && "text-[#488559]"} ${err && "text-[#FF0000]"} text-center`}>
            {err && error}
            {success && "Email Sent!"}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      {(success || err) && <ReportComponent />}

      <div
        className={`z-[100] lg:z-[40] lg:w-full lg:max-w-[85em] fixed lg:absolute bg-white top-0 inset-0 lg:top-40 shadow-2xl
                                 left-0 right-0 lg:left-auto lg:right-auto flex-col  items-center pb-6 lg:pb-20 px-3 lg:px-0
            ${isOpen ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden lg:overflow-y-hidden lg:h-fit transition-all duration-500 `}>
        <div className="flex justify-between lg:justify-evenly items-center w-full lg:px-[1em] lg:max-w-[76.188em]  lg:px-[0.19em] py-[1.06em] ">
          <NavLink to={"/"}>
            <img src={new_logo} alt="Quick Mynt" className="w-[18.438em] h-[3.813em] object-contain" />
          </NavLink>

          <p className="hidden lg:block lg:w-full font-osande font-[] lg:font-[600] text-[] lg:text-[3em] text-[#488559] text-center">Request a Demo</p>

          <button onClick={() => setIsOpen(false)}>
            <FaTimes color="#434343" size={30.13} />
          </button>
        </div>
        <p className="block lg:hidden lg:w-full font-osande font-[600] lg:font-[600] text-[2.5em] lg:text-[3em] text-[#488559] text-center mt-3 mb-7">Request a Demo</p>
        <div className="w-full lg:max-w-[76.188em] lg:mt-3 mb-10 lg:mb-20">
          <p className="font-[600] lg:font-[600] font-osande text-[1.8em] lg:text-[2.2em] leading-[60.48px] text-left w-full text-[#434343] lg:mt-6 lg:mb-6">See QuickMynt in Action</p>
          <p className="font-graphik font-[300] lg:font-[400] text-[1em] lg:text-[1.5em] leading-[24px] lg:leading-[35px] max-w-[21.375em] lg:max-w-[40.063em]">Ready to explore how QuickMynt can transform financial access for your team? Request a personalized demo today and discover the seamless, cost-free way to provide instant wage access and wellness tools for your employees.</p>
        </div>
        {/* <div className="flex w-full px-[1em] lg:max-w-[76.188em] lg:items-center justify-between"> */}
        <div className="tiny:[grid-template-columns:1fr;] grid lg:[grid-template-columns:50fr_50fr;] gap-[4rem]">
          {/* <form action="" method="post" className="w-full max-w-[20.625em] flex flex-col gap-8"> */}
          <form action="" method="post" className="w-full max-w-[100%] flex flex-col gap-8">
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="fname" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
                First Name
                <MdOutlineStarPurple500 size={16} fill="#F8B84E" className="-mt-1" color="#F8B84E" />
              </label>
              <input type="text" name="fname" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.fname} onChange={handleChange} />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="lname" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
                Last Name
                <MdOutlineStarPurple500 size={16} fill="#F8B84E" className="-mt-1" color="#F8B84E" />
              </label>
              <input type="text" name="lname" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.lname} onChange={handleChange} />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="compemail" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
                Company Email
                <MdOutlineStarPurple500 size={16} fill="#F8B84E" className="-mt-1" color="#F8B84E" />
              </label>
              <input type="text" name="compEmail" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.compEmail} onChange={handleChange} />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="compname" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
                Company Name
                <MdOutlineStarPurple500 size={16} fill="#F8B84E" className="-mt-1" color="#F8B84E" />
              </label>
              <input type="text" name="compName" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.compName} onChange={handleChange} />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="pnum" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
                Phone Number
                <MdOutlineStarPurple500 size={16} fill="#F8B84E" className="-mt-1" color="#F8B84E" />
              </label>
              <input type="text" name="pnum" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.pnum} onChange={handleChange} />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="employees_num" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
                Number of Employees
                <MdOutlineStarPurple500 size={16} fill="#F8B84E" className="-mt-1" color="#F8B84E" />
              </label>
              <input type="text" name="employees_num" id="" className="bg-[#EDEDED] px-2 text-[#434343]  w-full h-[2.75em] rounded-xl" value={formData.employees_num} onChange={handleChange} />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="fname" className="flex font-graphik font-[500] text-[1.125em] lg:text-[1.25em] gap-1">
                How can we help?
              </label>
              <textarea name="customer_message" id="" className="bg-[#EDEDED] px-2 text-[#434343] pt-3  w-full h-[12.375em] rounded-xl" value={formData.customer_message} onChange={handleChange} />
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LfCMokqAAAAADJ7ZcxRM_TvCOHKPIq2WsfhvvhV" // Replace with your free Site Key
                onChange={handleCaptchaChange}
                ref={recaptchaRef}
              />
            </div>

            {!loading ? (
              <button
                onClick={handleSubmit}
                className="z-40 text-[#F3FEF6] font-graphik font-[500] text-[1.0112em] lg:text-[1.094em] leading-[17.8px] lg:leading-[23.05px]
                            bg-[#488559] w-[11.6669em] lg:w-[10.5981em] h-[2.3887em] lg:h-[3.0744em] hover:text-[#488559]
                            hover:bg-[#FFF] hover:border hover:border-[#488559] rounded-full z-40 mx-auto lg:mx-0">
                Request a Demo
              </button>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <div className="w-6 h-6 border-4 border-[#488559] border-dashed rounded-full animate-spin"></div>
              </div>
            )}
          </form>
          <img src={demo_form_img} alt="form_img" className="hidden lg:block" />
        </div>
      </div>
    </>
  );
};
export default DemoForm;
