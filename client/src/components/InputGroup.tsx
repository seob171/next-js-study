import React, { memo } from "react";
import cla from "classnames";

interface InputGroupProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void;
}

const InputGroup = ({
  className = "mb-2",
  type = "text",
  placeholder = "",
  value,
  error,
  setValue,
}: InputGroupProps): JSX.Element => {
  return (
    <div className={className}>
      <input
        type={type}
        style={{ minWidth: 300 }}
        className={cla(
          `w-full p-3 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white hover:bg-white`,
          { "border-red-500": error }
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <small className="font-medium text-red-500">{error}</small>
    </div>
  );
};

export default memo(InputGroup);
