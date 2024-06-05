import { FunctionComponent } from "react";
import ServiceCard from "./service-card";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[61.5px] box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:pb-[26px] mq750:box-border mq1050:pb-10 mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-[91px] px-[81px] box-border max-w-full mq750:py-[38px] mq750:px-10 mq750:box-border mq1050:pt-[59px] mq1050:pb-[59px] mq1050:box-border">
        <div className="self-stretch flex flex-col items-center justify-center gap-[68px] mq750:gap-[34px] mq450:gap-[17px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
              Our Service Offerings
            </b>
            <div className="self-stretch h-11 relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 inline-block shrink-0 mq450:text-lgi mq450:leading-[29px]">
              {" "}
              Strategies that Drive Property Market Excellence
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[32px_28.7px] min-h-[510px] text-lg">
            <ServiceCard
              group117="/group-117.svg"
              automotiveSEO="Automotive SEO"
              driveYourSuccessWithAutom="Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
            />
            <ServiceCard
              group117="/group-117-1.svg"
              automotiveSEO="PPC Precision"
              driveYourSuccessWithAutom="Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
            />
            <ServiceCard
              group117="/group-117-2.svg"
              automotiveSEO="Social Acceleration"
              driveYourSuccessWithAutom=" Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
            />
            <ServiceCard
              group117="/group-117-3.svg"
              automotiveSEO="Content Excellence"
              driveYourSuccessWithAutom="Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
            />
            <div className="w-[297px] shadow-[-3px_4px_16px_rgba(0,_0,_0,_0.04)] rounded-lg bg-white flex flex-col items-center justify-start py-8 px-4 box-border gap-[16px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                <img
                  className="w-[52px] h-[52px] relative"
                  alt=""
                  src="/group-117-4.svg"
                />
                <b className="self-stretch relative leading-[23px]">
                  Web Design
                </b>
              </div>
              <p className="m-0 self-stretch relative text-sm font-body300-rg text-darkslategray-200">
                Transform visitors into customers with high-performance websites
                designed for seamless user experiences and increased
                conversions.
              </p>
            </div>
            <ServiceCard
              group117="/group-117-5.svg"
              automotiveSEO="Data-Driven Insights"
              driveYourSuccessWithAutom="Leverage data to refine your strategies, making informed decisions that drive revenue growth."
            />
            <ServiceCard
              group117="/group-117-6.svg"
              automotiveSEO="End-to-End Solutions"
              driveYourSuccessWithAutom="From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
            />
            <ServiceCard
              group117="/group-117-7.svg"
              automotiveSEO="Video marketing"
              driveYourSuccessWithAutom="Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
            />
          </div>
          <button className="cursor-pointer [border:none] py-[16.5px] px-16 bg-royalblue rounded-13xl flex flex-row items-center justify-center gap-[4px] whitespace-nowrap hover:bg-cornflowerblue">
            <b className="relative text-lg leading-[28px] font-semibold font-h300-bold text-white text-center inline-block min-w-[105px]">
              Get started
            </b>
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/customerservice2fill1.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
