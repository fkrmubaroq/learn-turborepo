import clsx from "clsx";
import styles from "./badge.module.css";
import { BadgeProps } from "./badge.types";


const variants = {
  primary: styles["variant-primary"],
  secondary: styles["variant-secondary"],
  tertiary: styles["variant-tertiary"],
};

const positions = {
  "top-right": styles["position-top-right"],
  "top-left": styles["position-top-left"],
  "bottom-right": styles["position-bottom-right"],
  "bottom-left": styles["position-bottom-left"],
};

export type BadgeVariants = keyof typeof variants;
export type BadgePosition = keyof typeof positions;
export default function Badge({
  variant = "tertiary",
  text,
  className,
  position = "top-right",
}: BadgeProps) {
  return (
    <div
      className={clsx(
        styles["badge"],
        variants[variant],
        positions[position],
        className
      )}
    >
      {text}
    </div>
  );
}
