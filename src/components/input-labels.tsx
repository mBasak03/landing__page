import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputLabelsType = {
  className?: string;
  name1?: string;
  enterYourNamePlaceholder?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propOverflow?: CSSProperties["overflow"];
};

const InputLabels: FunctionComponent<InputLabelsType> = ({
  className = "",
  name1,
  enterYourNamePlaceholder,
  propMinWidth,
  propOverflow,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const inputPlaceholdersStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-center text-base text-gray-300 font-h200-blod ${className}`}
    >
      <b
        className="relative leading-[24px] font-semibold inline-block min-w-[45px]"
        style={nameStyle}
      >
        {name1}
      </b>
      <div
        className="self-stretch rounded bg-gray-200 box-border flex flex-row items-start justify-start py-1.5 pr-2.5 pl-[11px] max-w-full border-[1px] border-solid border-silver"
        style={inputPlaceholdersStyle}
      >
        <input
          className="w-full [border:none] [outline:none] font-h200-blod text-base bg-[transparent] h-7 flex-1 relative leading-[28px] text-ut-70 text-left inline-block min-w-[214px] max-w-full p-0"
          placeholder={enterYourNamePlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputLabels;
