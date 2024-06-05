import { FunctionComponent } from "react";

export type TestimonialContainerType = {
  className?: string;
};

const TestimonialContainer: FunctionComponent<TestimonialContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-20 pb-[97.5px] box-border max-w-full text-center text-5xl text-gray-400 font-h300-bold mq750:pl-10 mq750:pr-10 mq750:pb-[63px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[849px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
            <div className="w-[190px] flex flex-row items-start justify-start">
              <div className="h-[190px] flex-1 relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
                <img
                  className="absolute top-[31px] left-[30.5px] w-32 h-32 object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/3dmodel-9040866-3@2x.png"
                />
              </div>
            </div>
            <div className="w-[190px] flex flex-row items-start justify-start">
              <div className="h-[190px] flex-1 relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-200 w-full h-full" />
                <img
                  className="absolute top-[31px] left-[31.5px] w-32 h-32 object-contain z-[1]"
                  alt=""
                  src="/medal-2439078-1@2x.png"
                />
                <img
                  className="absolute top-[31px] left-[31.5px] w-32 h-32 object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/medal-2439078-1-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[38px] max-w-full mq750:gap-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[404px] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[38px]">
              Trust Building with Social Proof
            </b>
            <p className="m-0 self-stretch relative leading-[36px] font-body300-rg text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
              Discover how leveraging client testimonials boosted buyer
              confidence, leading to higher conversion rates for a property
              development project
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[404px] max-w-full mq750:min-w-full">
            <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[38px]">
              Mobile-First Success:
            </b>
            <p className="m-0 self-stretch relative leading-[36px] font-body300-rg text-darkslategray-200 mq450:text-lgi mq450:leading-[29px]">
              {" "}
              Learn how our mobile-responsive design approach resulted in a 25%
              increase in inquiries from mobile users for a real estate agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialContainer;
