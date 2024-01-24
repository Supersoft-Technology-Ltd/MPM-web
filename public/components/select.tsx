import React from "react";
import Select from "react-select";
import { Lora } from "../fonts";

type Props = {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  value: any;
  onChange: (value: any) => void;
  onBlur?: () => void;
  err?: boolean;
  errMsg?: string;
};

export const StatusSelect: React.FC<Props> = ({
  placeholder,
  options,
  value,
  onChange,
  onBlur,
  err,
  errMsg
}) => {
  return (
    <div className="App">
      <Select
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption) => {
          onChange(selectedOption ? selectedOption.value : null);
        }}
        onBlur={onBlur}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused
              ? "rgba(200, 200, 201, 0.13)"
              : "rgba(200, 200, 201, 0.13)",
            backgroundColor: "rgba(200, 200, 201, 0.13)",
            borderRadius: "8px",
            height: "60px",
            fontFamily: `${Lora.className}`,
            color: "#000000",
            paddingLeft: ".7rem",
            outlineColor: state.isFocused
              ? "rgba(200, 200, 201, 0.13)"
              : "rgba(200, 200, 201, 0.13)",
          }),
        }}
        placeholder={placeholder}
      />
      {err && (
        <p
          className={`${Lora.className} font-extralight text-colorRed text-[10px]`}
        >
          {errMsg}
        </p>
      )}
    </div>
  );
};
