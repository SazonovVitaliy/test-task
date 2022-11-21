import { FC } from "react";
import { ButtonProps } from "./Button.props";

import cn from "classnames";

import s from "./Button.module.css";

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={cn(s.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
