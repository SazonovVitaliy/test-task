import { FC } from "react";
import { HeadingProps } from "./Heading.props";

import cn from "classnames";

import s from "./Heading.module.css";

const Heading: FC<HeadingProps> = ({
  As = "h1",
  children,
  className,
  ...props
}) => {
  return <As className={cn(s.heading, className)}>{children}</As>;
};

export default Heading;
