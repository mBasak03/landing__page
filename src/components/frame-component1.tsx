import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[61.5px] pr-5 pl-[21px] box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold ${className}`}
    >
      <div className="w-[779px] flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Your Peace of Mind
          </b>
          <p className="m-0 self-stretch h-[118px] relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 inline-block shrink-0 mq450:text-lgi mq450:leading-[29px]">
            <span className="block">
              Through our conversion-focused strategies, we ensure that property
              seekers are not just visitors, but engaged prospects ready to make
              their next move in the real estate market
            </span>
          </p>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button className="cursor-pointer [border:none] py-[16.5px] px-16 bg-royalblue rounded-13xl flex flex-row items-start justify-start gap-[4px] whitespace-nowrap hover:bg-cornflowerblue">
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

export default FrameComponent1;
