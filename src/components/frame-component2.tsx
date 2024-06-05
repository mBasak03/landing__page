import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-20 pb-10 box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
          <div className="w-[847.5px] flex flex-col items-end justify-start gap-[100px] max-w-full mq450:gap-[25px] mq1050:gap-[50px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[69px] pl-[71px] box-border max-w-full mq1050:pl-[35px] mq1050:pr-[34px] mq1050:box-border">
              <div className="flex-1 relative leading-[48px] font-extrabold inline-block max-w-full mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                Our Expertise in Action
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap mq750:justify-center">
              <div className="w-[190px] flex flex-row items-start justify-start">
                <div className="h-[190px] flex-1 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
                  <img
                    className="absolute top-[31px] left-[31.5px] w-32 h-32 object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/weather-534564-2@2x.png"
                  />
                </div>
              </div>
              <div className="w-[190px] flex flex-row items-start justify-start">
                <div className="h-[190px] flex-1 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
                  <img
                    className="absolute top-[31px] left-[31px] w-32 h-32 object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/mass-9984040-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[35px] max-w-full text-5xl mq750:gap-[17px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[406px] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[38px]">
              Effective CTAs
            </b>
            <p className="m-0 self-stretch relative leading-[36px] font-body300-rg text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
              {" "}
              See how our strategic CTAs drove a significant increase in
              property inquiries and accelerated sales for a real estate agency.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[406px] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[38px]">
              Conversion-Optimized Landing Pages
            </b>
            <p className="m-0 self-stretch relative leading-[36px] font-body300-rg text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
              Explore a case study where our landing page optimization increased
              property lead conversion rates by 30%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
