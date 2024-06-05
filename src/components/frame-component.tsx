import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[64px] max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:gap-[32px] mq450:gap-[16px] ${className}`}
    >
      <div className="w-[1030px] flex flex-col items-center justify-center gap-[16px] max-w-full">
        <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
          Frequently Asked Questions
        </b>
        <p className="m-0 w-[984px] relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 inline-block max-w-full mq450:text-lgi mq450:leading-[29px]">
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </p>
      </div>
      <div className="w-[1280px] overflow-x-auto flex flex-col items-center justify-start py-0 px-5 box-border max-w-full text-left text-lg text-gray-500">
        <div className="w-[800px] shadow-[0px_10px_15px_rgba(0,_120,_255,_0.35)] bg-white flex flex-col items-start justify-start py-5 pr-[49px] pl-[45px] box-border">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="relative leading-[28px] font-semibold">
              3. How does Osumare measure campaign success?
            </div>
            <div className="flex flex-row items-center justify-end text-xl font-aboreto">
              <div className="relative leading-[20px] [transform:_rotate(180deg)] mq450:text-base mq450:leading-[16px]">
                
              </div>
            </div>
          </div>
        </div>
        <div className="w-[800px] shadow-[0px_10px_15px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col items-start justify-start">
          <div className="self-stretch shadow-[0px_10px_15px_rgba(0,_120,_255,_0.35)] bg-white flex flex-col items-start justify-start py-5 pr-[49px] pl-[45px] relative gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="relative leading-[28px] font-semibold">
                3. How does Osumare measure campaign success?
              </div>
              <div className="flex flex-row items-center justify-end text-xl font-aboreto">
                <div className="relative leading-[20px] [transform:_rotate(180deg)] mq450:text-base mq450:leading-[16px]">
                  
                </div>
              </div>
            </div>
            <div className="w-[474px] h-[23px] !m-[0] absolute top-[calc(50%_-_12px)] left-[45px] z-[1]" />
          </div>
        </div>
        <div className="w-[800px] shadow-[0px_10px_15px_rgba(0,_0,_0,_0.1)] rounded-t-none rounded-b-lg bg-white flex flex-col items-start justify-start text-white">
          <div className="self-stretch shadow-[0px_10px_15px_rgba(0,_120,_255,_0.35)] bg-royalblue flex flex-col items-start justify-start py-5 pr-[49px] pl-[45px] relative gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="relative leading-[28px] font-semibold">
                3. How does Osumare measure campaign success?
              </div>
              <div className="flex flex-row items-center justify-end text-xl font-aboreto">
                <div className="relative leading-[20px] inline-block min-w-[16px] mq450:text-base mq450:leading-[16px]">
                  
                </div>
              </div>
            </div>
            <div className="w-[474px] h-[23px] !m-[0] absolute top-[calc(50%_-_12px)] left-[45px] z-[1]" />
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-7 pb-[27.8px] pr-[51px] pl-[45px] box-border max-h-[200px] max-w-full text-base text-dimgray font-body300-rg">
            <p className="m-0 h-[117px] flex-1 relative leading-[24px] inline-block max-w-full">
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
