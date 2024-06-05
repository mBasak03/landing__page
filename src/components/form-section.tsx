import { FunctionComponent } from "react";
import InputLabels from "./input-labels";

export type FormSectionType = {
  className?: string;
};

const FormSection: FunctionComponent<FormSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-[143px] px-5 pb-[133.5px] box-border relative gap-[63.5px] max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:gap-[16px] mq450:pt-[60px] mq450:pb-[57px] mq450:box-border mq1050:gap-[32px] mq1050:pt-[93px] mq1050:pb-[87px] mq1050:box-border ${className}`}
    >
      <div className="w-[576px] h-[576px] absolute !m-[0] bottom-[-192.65px] left-[537.8px] [filter:blur(327px)] rounded-[50%] bg-dodgerblue-100 [transform:_rotate(140.5deg)] [transform-origin:0_0]" />
      <div className="w-[381.9px] h-[630.4px] absolute !m-[0] top-[696.63px] right-[-144.52px] [filter:blur(327px)] rounded-[50%] bg-tomato [transform:_rotate(-126deg)] [transform-origin:0_0]" />
      <div className="w-[904px] flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full mq1050:pl-[38px] mq1050:pr-[38px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch relative leading-[48px] font-extrabold z-[1] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Connect with Our Digital Marketing Experts
          </div>
          <div className="self-stretch relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 z-[1] mq450:text-lgi mq450:leading-[29px]">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together
          </div>
        </div>
      </div>
      <div className="w-[904px] shadow-[0px_10px_44px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-white flex flex-row flex-wrap items-center justify-center py-8 px-14 box-border max-w-full z-[1] mq450:gap-[16px] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq1050:pl-7 mq1050:pr-7 mq1050:box-border">
        <form className="m-0 flex-1 flex flex-col items-center justify-center gap-[32px] max-w-full mq450:gap-[16px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[32px_30px] max-w-full">
            <div className="flex-1 flex flex-col items-center justify-center gap-[16px] min-w-[152px] max-w-full">
              <InputLabels
                name1="Name"
                enterYourNamePlaceholder="Enter your name"
              />
              <InputLabels
                name1="Phone"
                enterYourNamePlaceholder="Enter your Number"
                propMinWidth="50px"
                propOverflow="hidden"
              />
              <InputLabels
                name1="Email"
                enterYourNamePlaceholder="Enter your Total No of Vehicles:"
                propMinWidth="42px"
                propOverflow="unset"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center min-w-[152px] max-w-full mq450:gap-[16px]">
              <div className="self-stretch h-[248px] rounded-lg flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[12px] max-w-full">
                <b className="relative text-base leading-[24px] font-semibold font-h200-blod text-gray-300 text-center inline-block min-w-[71px] shrink-0">
                  Message
                </b>
                <div className="self-stretch rounded bg-gray-200 box-border flex flex-row items-start justify-start pt-1.5 pb-[17px] pr-[17px] pl-[11px] max-w-full shrink-0 border-[1px] border-solid border-silver">
                  <p className="m-0 h-52 flex-1 relative text-base leading-[28px] font-h200-blod text-ut-70 text-left inline-block max-w-full">
                    Enter your Message.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[13px] px-5 bg-royalblue w-[408px] rounded-13xl flex flex-row items-center justify-center box-border gap-[4px] whitespace-nowrap max-w-full hover:bg-cornflowerblue">
            <b className="relative text-5xl leading-[30px] font-bold font-h300-bold text-white text-center">
              Get started
            </b>
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/customerservice2fill.svg"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
