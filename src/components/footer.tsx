import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1408px] flex flex-row items-start justify-end py-0 px-16 box-border max-w-full lg:pl-8 lg:pr-8 lg:box-border ${className}`}
    >
      <footer className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-5xl text-gray-400 font-h300-bold mq750:gap-[16px]">
        <div className="self-stretch [backdrop-filter:blur(500px)] rounded-13xl [background:linear-gradient(261.57deg,_rgba(0,_111,_237,_0.12),_rgba(179,_214,_255,_0.12))] overflow-hidden flex flex-row items-start justify-between pt-14 pb-[107px] pr-[35px] pl-[43px] box-border relative max-w-full gap-[20px] lg:pl-[21px] lg:box-border mq750:pt-9 mq750:pb-[70px] mq750:box-border mq1050:flex-wrap">
          <div className="h-[576px] w-[576px] absolute !m-[0] bottom-[-304.65px] left-[490.8px] [filter:blur(327px)] rounded-[50%] bg-dodgerblue-200 [transform:_rotate(140.5deg)] [transform-origin:0_0]" />
          <div className="w-[370px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[32px] max-w-full text-base font-body300-rg mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[16px] text-darkslategray-200">
              <div className="w-[137px] h-[72px] relative rounded overflow-hidden shrink-0 z-[1]">
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_68.5px)] max-h-full w-[124.2px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/osumare-logo01-2-3@2x.png"
                />
              </div>
              <p className="m-0 self-stretch relative leading-[24px] z-[1]">
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </p>
            </div>
            <div className="w-[196px] flex flex-col items-start justify-start gap-[8px] text-center text-lg font-h300-bold">
              <a className="[text-decoration:none] relative tracking-[0.3px] leading-[27px] font-bold text-[inherit] inline-block min-w-[79px] z-[1]">
                Address
              </a>
              <p className="m-0 self-stretch relative text-base leading-[24px] font-body300-rg text-darkslategray-200 text-left z-[1]">
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </p>
            </div>
            <div className="w-48 flex flex-col items-start justify-start gap-[24px] z-[1] text-5xl font-h200-blod">
              <b className="relative leading-[36px] font-bold inline-block min-w-[108px] mq450:text-lgi mq450:leading-[29px]">
                Contacts
              </b>
              <div className="self-stretch flex flex-col items-start justify-center gap-[16px] text-base text-darkslategray-200 font-body300-rg">
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/mailfill.svg"
                  />
                  <a
                    className="flex-1 relative leading-[24px] text-[inherit] [text-decoration:none] whitespace-nowrap"
                    href="mailto:%68ello@osum%61re%2Ein"
                    target="_blank"
                  >
                    hello@osumare.in
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/phonefill.svg"
                  />
                  <div className="relative leading-[24px] whitespace-nowrap">
                    +91 8459 8762 26
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px] text-center">
            <b className="relative leading-[48px] font-bold inline-block min-w-[72px] mq450:text-lgi mq450:leading-[38px]">
              Menu
            </b>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-darkslategray-200">
              <div className="relative leading-[24px] font-medium inline-block min-w-[50px]">
                Home
              </div>
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[51px]">
                About
              </a>
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[67px]">
                Services
              </a>
              <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                Work
              </div>
              <div className="relative leading-[24px] font-medium inline-block min-w-[38px]">
                Blog
              </div>
              <div className="relative leading-[24px] font-medium inline-block min-w-[54px]">
                Career
              </div>
            </div>
          </div>
          <div className="w-[280px] flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[48px] font-bold inline-block min-w-[75px] mq450:text-lgi mq450:leading-[38px]">
              Social
            </b>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-16 relative gap-[24px]">
              <div className="w-[104px] flex flex-col items-start justify-start relative">
                <img
                  className="w-10 h-10 relative rounded-13xl overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/pinterestfill.svg"
                />
                <img
                  className="w-10 h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-13xl max-h-full overflow-hidden"
                  alt=""
                  src="/pinterestfill-1.svg"
                />
              </div>
              <img
                className="h-10 w-10 relative rounded-13xl overflow-hidden shrink-0 min-h-[40px]"
                alt=""
                src="/pinterestfill-2.svg"
              />
              <img
                className="h-10 w-10 relative rounded-13xl overflow-hidden shrink-0 min-h-[40px]"
                alt=""
                src="/pinterestfill-3.svg"
              />
              <img
                className="h-10 w-10 absolute !m-[0] bottom-[0px] left-[0px] rounded-13xl overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/whatsappfill.svg"
              />
              <img
                className="h-10 w-10 absolute !m-[0] bottom-[0px] left-[64px] rounded-13xl overflow-hidden shrink-0"
                alt=""
                src="/whatsappfill-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-base">
          <div className="relative tracking-[0.3px] leading-[24px] font-medium">
            © 2023 Osumare. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
