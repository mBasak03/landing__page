import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TrendCardsType = {
  className?: string;
  group116?: string;
  marketTrendsAnalysis?: string;
  predictiveInsightsToGuide?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propMargin?: CSSProperties["margin"];
};

const TrendCards: FunctionComponent<TrendCardsType> = ({
  className = "",
  group116,
  marketTrendsAnalysis,
  predictiveInsightsToGuide,
  propPadding,
  propPadding1,
  propMargin,
}) => {
  const trendCardsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const predictiveInsightsToStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div
      className={`self-stretch shadow-[-2px_4px_32px_rgba(235,_235,_235,_0.6)] rounded-2xl bg-white box-border flex flex-row items-start justify-start py-[43px] px-[31px] gap-[16px] max-w-full text-left text-5xl text-gray-400 font-poppins border-[1px] border-solid border-whitesmoke-300 mq750:flex-wrap ${className}`}
      style={trendCardsStyle}
    >
      <div
        className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0"
        style={frameDivStyle}
      >
        <img
          className="w-[52px] h-[52px] relative"
          loading="lazy"
          alt=""
          src={group116}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[295px] max-w-full">
        <div className="self-stretch relative leading-[32px] font-semibold mq450:text-lgi mq450:leading-[25px]">
          {marketTrendsAnalysis}
        </div>
        <div
          className="self-stretch relative text-base tracking-[-0.02em] leading-[24px] font-h200-blod text-darkslategray-200"
          style={predictiveInsightsToStyle}
        >
          {predictiveInsightsToGuide}
        </div>
      </div>
    </div>
  );
};

export default TrendCards;
