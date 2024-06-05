import { FunctionComponent } from "react";
import TrendCards from "./trend-cards";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-20 pb-28 box-border max-w-full text-center text-13xl text-gray-400 font-h300-bold mq750:pl-10 mq750:pr-10 mq750:pb-[47px] mq750:box-border mq1050:pb-[73px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <b className="self-stretch relative leading-[48px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
              Navigating Real Estate's Digital Landscape
            </b>
            <div className="self-stretch h-11 relative text-5xl leading-[36px] font-body300-rg text-darkslategray-200 flex items-center justify-center shrink-0 mq450:text-lgi mq450:leading-[29px]">
              Insights for Real Estate Marketing Advantage
            </div>
          </div>
        </div>
        <div className="self-stretch h-[736px] flex flex-row flex-wrap items-center justify-start relative max-w-full text-left text-5xl font-poppins mq750:h-auto mq750:min-h-[736]">
          <div className="w-[586px] !m-[0] absolute top-[38px] left-[0px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <TrendCards
              group116="/group-116.svg"
              marketTrendsAnalysis="Market Trends Analysis"
              predictiveInsightsToGuide="Predictive insights to guide real estate strategies."
            />
            <TrendCards
              group116="/group-116-1.svg"
              marketTrendsAnalysis="Targeted Buyer Persona"
              predictiveInsightsToGuide="Understand and connect with your ideal property buyers."
              propPadding="43px 31px"
              propPadding1="6px 0px 0px"
              propMargin="unset"
            />
            <TrendCards
              group116="/group-116-2.svg"
              marketTrendsAnalysis="Competitor Insights"
              predictiveInsightsToGuide="Stand out in the property market with informed strategies."
              propPadding="43px 31px"
              propPadding1="6px 0px 0px"
              propMargin="0"
            />
            <TrendCards
              group116="/group-116-3.svg"
              marketTrendsAnalysis="Visual Content Appeal"
              predictiveInsightsToGuide="Captivate buyers with appealing visuals and immersive experiences."
              propPadding="31px"
              propPadding1="18px 0px 0px"
              propMargin="0"
            />
          </div>
          <div className="h-[736px] w-[793px] !m-[0] absolute top-[0px] left-[487px] rounded-13xl bg-whitesmoke-100 flex flex-row items-start justify-start py-[50px] pr-[18px] pl-7 box-border max-w-full z-[1] text-13xl text-white font-lato">
            <div className="h-[556px] flex-1 relative max-w-full">
              <div className="absolute top-[0px] left-[0px] w-full h-[517px]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/backgroundcomplete.svg"
                />
                <div className="absolute top-[11.9px] left-[130.9px] w-[506.7px] h-[474.7px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                  />
                  <div className="absolute top-[105.9px] left-[96.7px] bg-darkslategray-300 w-[288.8px] h-[213px] z-[4]">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full"
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className="absolute w-[calc(100%_-_14.9px)] top-[7.5px] right-[7.5px] left-[7.4px] max-w-full overflow-hidden h-[198.1px] object-contain z-[6]"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute w-[calc(100%_-_14.9px)] top-[7.5px] right-[7.5px] left-[7.4px] max-w-full overflow-hidden h-[198.1px] object-contain z-[7]"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <div className="absolute h-[calc(100%_-_27.5px)] top-[14px] bottom-[13.5px] left-[17.1px] w-[242.6px]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full z-[8]"
                        alt=""
                        src="/vector-3.svg"
                      />
                      <img
                        className="absolute top-[73.6px] left-[5px] w-[16.8px] h-0.5 z-[10]"
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img
                        className="absolute top-[50.6px] left-[1.5px] w-[44.2px] h-[50.1px] z-[12]"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                    <div className="absolute h-[calc(100%_-_26.5px)] top-[13.5px] bottom-[13px] left-[26.7px] w-[242.5px]">
                      <img
                        className="absolute top-[1px] left-[0px] w-full h-full z-[9]"
                        alt=""
                        src="/vector-6.svg"
                      />
                      <div className="absolute top-[50.7px] left-[60.7px] font-black [text-shadow:0px_4px_13px_#9bc9fc] z-[10] mq450:text-lgi mq1050:text-7xl">
                        We Are
                      </div>
                      <div className="absolute top-[84.7px] left-[66.7px] font-black [text-shadow:0px_4px_13px_#9bc9fc] z-[11] mq450:text-lgi mq1050:text-7xl">
                        Expert
                      </div>
                      <div className="absolute top-[49.9px] left-[177.2px] w-[43.6px] h-[52px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[15]"
                          alt=""
                          src="/vector-7.svg"
                        />
                        <img
                          className="absolute top-[26.9px] left-[4.2px] w-[17.2px] h-[2.4px] z-[16]"
                          alt=""
                          src="/vector-8.svg"
                        />
                      </div>
                      <img
                        className="absolute top-[72.2px] left-[175.6px] w-[21.1px] h-[50.4px] z-[17]"
                        alt=""
                        src="/vector-9.svg"
                      />
                      <img
                        className="absolute top-[153.2px] left-[10.4px] w-[40.6px] h-[26.4px] z-[10]"
                        alt=""
                        src="/group.svg"
                      />
                      <img
                        className="absolute top-[12px] left-[185.2px] w-[36.1px] h-[31.3px] z-[10]"
                        alt=""
                        src="/group-1.svg"
                      />
                      <img
                        className="absolute top-[2px] left-[2.8px] w-11 h-[41.8px] z-[10]"
                        alt=""
                        src="/group-2.svg"
                      />
                      <img
                        className="absolute top-[0px] left-[86.5px] w-[47.1px] h-[26.6px] z-[10]"
                        alt=""
                        src="/group-3.svg"
                      />
                      <img
                        className="absolute top-[158px] left-[106.5px] w-[38px] h-[26.1px] z-[10]"
                        alt=""
                        src="/group-4.svg"
                      />
                      <img
                        className="absolute top-[56.2px] left-[11.9px] w-[6.3px] h-[14.1px] z-[10]"
                        alt=""
                        src="/vector-10.svg"
                      />
                      <img
                        className="absolute top-[57.2px] left-[7.6px] w-[6.9px] h-[12.8px] z-[11]"
                        alt=""
                        src="/vector-11.svg"
                      />
                      <img
                        className="absolute top-[78.4px] left-[0.5px] w-[14.7px] h-[2.7px] z-[10]"
                        alt=""
                        src="/vector-12.svg"
                      />
                      <div className="absolute top-[49.9px] left-[7.9px] w-[43.6px] h-[52px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-full h-full z-[13]"
                          alt=""
                          src="/vector-13.svg"
                        />
                        <img
                          className="absolute top-[22.4px] left-[17.6px] w-[19.8px] h-[2.4px] z-[14]"
                          alt=""
                          src="/vector-14.svg"
                        />
                        <img
                          className="absolute top-[26.9px] left-[22.2px] w-[17.2px] h-[2.4px] z-[14]"
                          alt=""
                          src="/vector-15.svg"
                        />
                        <img
                          className="absolute top-[33.6px] left-[18.5px] w-[10.5px] h-[15.9px] z-[14]"
                          alt=""
                          src="/vector-16.svg"
                        />
                        <img
                          className="absolute top-[33.5px] left-[13.8px] w-[7.4px] h-[11.1px] z-[15]"
                          alt=""
                          src="/vector-17.svg"
                        />
                      </div>
                      <img
                        className="absolute top-[72.2px] left-[31.9px] w-[21.1px] h-[50.5px] z-[15]"
                        alt=""
                        src="/vector-18.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[522.2px] left-[83.7px] w-[578.7px] h-[33.8px]"
                alt=""
                src="/shadow.svg"
              />
              <img
                className="absolute top-[437.1px] left-[585.9px] w-[73.3px] h-[103.5px] z-[2]"
                loading="lazy"
                alt=""
                src="/plant2.svg"
              />
              <div className="absolute top-[316.8px] left-[261px] w-[222.1px] h-[223.9px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[30.9px] h-[223.9px] z-[2]"
                  alt=""
                  src="/vector-19.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/group-5.svg"
                />
              </div>
              <div className="absolute top-[148.3px] left-[437.3px] w-[178.9px] h-[392.4px]">
                <img
                  className="absolute top-[168.5px] left-[14.9px] w-[30.9px] h-[223.9px] z-[2]"
                  alt=""
                  src="/vector-20.svg"
                />
                <img
                  className="absolute top-[49.5px] left-[4.4px] w-[18.5px] h-[20.8px] z-[10]"
                  alt=""
                  src="/vector-21.svg"
                />
                <img
                  className="absolute top-[63.3px] left-[6.4px] w-[21.9px] h-[11.7px] z-[11]"
                  alt=""
                  src="/vector-22.svg"
                />
                <img
                  className="absolute top-[50.8px] left-[28.4px] w-[18.8px] h-[18.9px] z-[10]"
                  alt=""
                  src="/vector-23.svg"
                />
                <img
                  className="absolute top-[46.3px] left-[20.7px] w-[22.8px] h-[11.2px] z-[11]"
                  alt=""
                  src="/vector-24.svg"
                />
                <img
                  className="absolute top-[39.2px] left-[27.4px] w-[6.3px] h-[14.1px] z-[12]"
                  alt=""
                  src="/vector-25.svg"
                />
                <img
                  className="absolute top-[40.2px] left-[31.1px] w-[6.9px] h-[12.8px] z-[13]"
                  alt=""
                  src="/vector-26.svg"
                />
                <img
                  className="absolute top-[61.4px] left-[30.5px] w-[14.7px] h-[2.7px] z-[11]"
                  alt=""
                  src="/vector-27.svg"
                />
                <img
                  className="absolute top-[57.1px] left-[33.4px] w-[16.8px] h-0.5 z-[12]"
                  alt=""
                  src="/vector-28.svg"
                />
                <img
                  className="absolute top-[34.1px] left-[9.6px] w-[44.2px] h-[50.1px] z-[14]"
                  alt=""
                  src="/vector-29.svg"
                />
                <img
                  className="absolute top-[55.3px] left-[0.3px] w-[19.8px] h-[2.4px] z-[16]"
                  alt=""
                  src="/vector-30.svg"
                />
                <img
                  className="absolute top-[66.5px] left-[8.8px] w-[10.5px] h-[15.9px] z-[16]"
                  alt=""
                  src="/vector-31.svg"
                />
                <img
                  className="absolute top-[66.4px] left-[16.5px] w-[7.4px] h-[11.1px] z-[17]"
                  alt=""
                  src="/vector-32.svg"
                />
                <img
                  className="absolute top-[111.8px] left-[16.7px] w-[40.1px] h-[37.3px] z-[10]"
                  alt=""
                  src="/group-6.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/character.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
