import { FC, ChangeEvent } from "react";
import { InputProps } from "./input.props";

import cn from "classnames";

import s from "./Input.module.css";

const Input: FC<InputProps> = ({
  label,
  value,
  type,
  className,
  name,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  return (
    <label htmlFor="type">
      {label}
      <input
        className={cn(s.input, className)}
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        autoComplete="off"
      />
    </label>
  );
};

export default Input;
