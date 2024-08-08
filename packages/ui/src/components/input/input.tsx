import clsx from "clsx";
import styles from "./input.module.css";
import { InputProps } from "./input.types";

export default function Input({ className, ...props }: InputProps) {
  return <input className={clsx(styles["input"], className)} {...props} />;
}
