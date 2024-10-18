import { FaArrowRight } from "react-icons/fa";
import AccordionFAQ from "./Accordion/AccordionFAQ";
import { useState } from "react";

const SectionSeven = () => {
  const accordionData = [
    {
      title: "What is QuickMynt?",
      body: "QuickMynt is an earned wage access (EWA) platform that allows employees to access a portion of their earned wages before payday. This gives workers more financial flexibility and control over their income.",
    },
    {
      title: "How does QuickMynt work?",
      body: "QuickMynt connects with your employer's payroll system to track your hours worked. You can view your available earned wages in real-time and choose to withdraw them when you need. The amount accessed is automatically deducted from your next paycheck.",
    },
    {
      title: "Who is eligible to use QuickMynt?",
      body: "QuickMynt is available to employees of businesses that have partnered with us. If your employer offers QuickMynt, you're eligible to use the platform to access your earned wages.",
    },
    {
      title: "How much can I withdraw through QuickMynt?",
      body: "You can withdraw a portion of your earned wages, typically up to a specific percentage (e.g., 50% or 75%) of the amount you've earned by the time of your withdrawal request. The exact amount depends on your employer's policies.",
    },
    {
      title: "Is there a fee to use QuickMynt?",
      body: "Yes, there is a small transaction fee to access your earned wages through QuickMynt. This fee is transparent and will be shown to you before you confirm any transaction.",
    },
    {
      title: "Does using QuickMynt affect my credit score?",
      body: "No, using QuickMynt does not affect your credit score. There is no credit check involved, and QuickMynt is simply a tool for accessing wages you've already earned.",
    },
    {
      title: "How often can I use QuickMynt?",
      body: "The frequency with which you can use QuickMynt to access your wages depends on your employer's policy, but typically employees are allowed to withdraw up to a set number of times per pay cycle (e.g., up to three times within a two-week pay period).",
    },
    {
      title: "How quickly will I receive my wages after making a withdrawal?",
      body: "Withdrawals made through QuickMynt are typically processed instantly, with funds available in your bank account within minutes, depending on your bank.",
    },
    {
      title: "Does my employer have to offer QuickMynt for me to use it?",
      body: "Yes, your employer must partner with QuickMynt in order for you to access your earned wages through the platform. If your employer doesn't currently offer QuickMynt, feel free to refer them to us!",
    },
    {
      title: "How does QuickMynt benefit employers?",
      body: "Employers benefit by offering QuickMynt as it boosts employee satisfaction, reduces financial stress, and increases retention and loyalty. It also gives businesses a competitive edge in attracting new talent.",
    },
    {
      title: "Will using QuickMynt affect my paycheck?",
      body: "Yes, but only in the sense that any wages you access early through QuickMynt will be deducted from your next paycheck. The remaining balance will be paid as usual on your regular payday.",
    },
    {
      title: "How secure is my information with QuickMynt?",
      body: "QuickMynt uses industry-standard encryption and complies with data privacy regulations to ensure that your personal and financial information is kept secure at all times.",
    },
  ];

  const [showFull, setShowFull] = useState(false);

  return (
    <section className={`w-full transition-all duration-1000 ${showFull ? "h-[1200px] lg:h-[2100px]" : "h-[1010px] lg:h-[1550px]"} bg-[#00204C] relative pt-24`}>
      <div className="flex flex-col gap-5 items-center">
            <div className="w-full max-w-[341px] lg:max-w-[1140px] text-white flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 ">
                <div className="flex w-full justify-start lg:justify-center items-center ">
                    <p className="max-w-[293.23px] w-full lg:max-w-[555px] font-[800] font-osande text-[30px] lg:text-[60px] leading-[40px] lg:leading-[69.02px] ">
                    Wondering How QuickMynt Works? Let's Break It Down
                    </p>
                </div>
                <div className="flex flex-col gap-3 lg:gap-8 items-start lg:max-w-[548px]">
                    <div className={`flex flex-col gap-4 lg:gap-8 transition-all duration-1000 ${showFull ? "h-[780px] lg:h-[1510px]" : "h-[600px] lg:h-[971px]"} overflow-hidden`}>
                        <AccordionFAQ accordionData={accordionData} />
                    </div>
                    <button 
                    className="flex p-0 text-[#46BDCE] gap-8 font-graphik font-[700] text-[16px] lg:text-[24px] 
                            leading-[16.91px] lg:leading-[32px] justify-center items-center bg-transparent
                            border-none outline-none focus:border-none focus:outline-none
                            "
                    onClick={() => setShowFull(prev => !prev)}
                    >
                        View more <FaArrowRight className="h-[21.72px] lg:h-[30px] w-[21.72px] lg:w-[30px]" />
                    </button>
                </div>
            </div>
        </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="w-full h-[100px] lg:h-[300px] lg:h-[400px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="m395.33,47.74c-220.05,-86.96 -429.38,-32.19 -506.53,6.06l-23.57,506.88l1563.35,-18.72c0.14,-146.03 -8.22,-442.99 -42.7,-462.6c-43.1,-24.52 -146.45,-97.56 -388.41,-34.06c-241.97,63.51 -327.07,111.14 -602.13,2.44l-0.01,0z"
            fill="#003986"
            transform="matrix(1 0 0 1 0 0)"
          />
          <path
            d="m385.77,138.4c-239.63,-37.35 -455.84,30.83 -533.98,69.59l18.45,385.34l1648.06,-214.77c-12.34,-110.17 -46.53,-333.08 -84.59,-343.45c-47.57,-12.96 -154.38,-74.17 -404.27,4.78c-249.89,78.96 -344.12,145.19 -643.67,98.51z"
            fill="#FCEBE3"
          />
        </svg>
      </div>
    </section>
  );
};
export default SectionSeven;
