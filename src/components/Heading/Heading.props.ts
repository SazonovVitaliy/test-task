import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
  As?: "h1" | "h2" | "h3";
  className?: string;
}
