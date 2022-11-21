import { ChangeEvent } from "react";

export interface InputProps {
  label: string;
  value: string | number;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name?: string;
}
