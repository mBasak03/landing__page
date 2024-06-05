import { FunctionComponent } from "react";

export type ServiceCardType = {
  className?: string;
  group117?: string;
  automotiveSEO?: string;
  driveYourSuccessWithAutom?: string;
};

const ServiceCard: FunctionComponent<ServiceCardType> = ({
  className = "",
  group117,
  automotiveSEO,
  driveYourSuccessWithAutom,
}) => {
  return (
    <div
      className={`w-[297px] shadow-[-3px_4px_16px_rgba(0,_0,_0,_0.04)] rounded-lg bg-white flex flex-col items-center justify-start py-8 px-4 box-border gap-[16px] text-center text-lg text-gray-400 font-h300-bold ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
        <img
          className="w-[52px] h-[52px] relative"
          loading="lazy"
          alt=""
          src={group117}
        />
        <b className="self-stretch relative leading-[23px] font-bold">
          {automotiveSEO}
        </b>
      </div>
      <p className="m-0 self-stretch relative text-sm font-body300-rg text-darkslategray-200">
        {driveYourSuccessWithAutom}
      </p>
    </div>
  );
};

export default ServiceCard;
