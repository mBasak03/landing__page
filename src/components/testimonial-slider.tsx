import { FunctionComponent } from "react";

export type TestimonialSliderType = {
  className?: string;
};

const TestimonialSlider: FunctionComponent<TestimonialSliderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1235px] flex flex-row items-start justify-start pt-0 px-[59px] pb-24 box-border max-w-full text-left text-lg text-gray-500 font-poppins lg:pl-[29px] lg:pr-[29px] lg:box-border mq750:pb-[62px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]">
        <div className="self-stretch shadow-[0px_20px_40px_rgba(0,_0,_0,_0.08)] rounded-2xl bg-white flex flex-row items-start justify-start py-[50px] px-11 box-border max-w-full lg:pl-[22px] lg:pr-[22px] lg:box-border mq750:pt-8 mq750:pb-8 mq750:box-border">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[32px_30px] max-w-full">
            <div className="flex-1 rounded-2xl bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-center pt-[184.3px] pb-[179.7px] pr-5 pl-6 box-border relative min-w-[335px] max-w-full mq450:pt-[120px] mq450:pb-[117px] mq450:box-border">
              <img
                className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.3px] left-[0px] max-w-full overflow-hidden object-cover"
                alt=""
                src="/tabish-formal-photo-1-1@2x.png"
              />
              <img
                className="h-[100px] w-[100px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/playcirclefill.svg"
              />
            </div>
            <div className="w-[397px] flex flex-col items-start justify-start pt-[89.5px] px-0 pb-0 box-border max-w-full mq450:pt-[58px] mq450:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="h-20 w-20 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/avatar-of-team@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start py-5 px-0">
                      <b className="relative font-bold inline-block min-w-[114px]">
                        Tabish khan
                      </b>
                    </div>
                  </div>
                  <h1 className="m-0 w-[62px] relative text-43xl leading-[62px] font-normal font-aboreto text-royalblue flex items-center mq450:text-18xl mq450:leading-[37px] mq1050:text-31xl mq1050:leading-[50px]">
                    
                  </h1>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl font-body300-rg">
                  <p className="m-0 self-stretch relative leading-[36px] mq450:text-lgi mq450:leading-[29px]">
                    Osumare's expertise in pharma marketing is unparalleled.
                    Their strategies helped us navigate complex regulations
                    while driving remarkable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <div className="w-[152px] flex flex-row items-start justify-between gap-[20px]">
            <img
              className="h-[60px] w-[60px] relative min-h-[60px]"
              loading="lazy"
              alt=""
              src="/scroll-buttion.svg"
            />
            <img
              className="h-[60px] w-[60px] relative object-contain min-h-[60px]"
              alt=""
              src="/scroll-buttion-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
