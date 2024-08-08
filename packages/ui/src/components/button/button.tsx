import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./button.module.css";

export const buttonStyles = cva(styles["button"], {
  variants: {
    variant: {
      primary: styles["variant-primary"],
      secondary: styles["variant-secondary"],
      tertiary: styles["variant-tertiary"],
      "outline-white": styles["variant-outline-white"],
      "outline-primary": styles["variant-outline-primary"],
      "outline-secondary": styles["variant-outline-secondary"],
      "outline-tertiary": styles["variant-outline-tertiary"],
    },
    size: {
      icon: styles["size-icon"],
      sm: styles["size-sm"],
      md: styles["size-md"],
    },
    rounded: {
      xs: styles["radius-xs"],
      sm: styles["radius-sm"],
      md: styles["radius-md"],
      xl: styles["radius-xl"],
      full: styles["radius-full"],
      none: styles["radius-none"],
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    rounded: "md",
  },
});
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles>;
export default function Button({
  variant = "primary",
  size = "md",
  className,
  rounded = "sm",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonStyles({ variant, size, className, rounded }))}
      {...props}
    >
      {children}
    </button>
  );
}
