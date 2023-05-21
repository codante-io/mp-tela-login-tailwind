import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: IconType;
  error?: string;
}
