import { ButtonProps } from "./button";

export const buttonVariants = [
  "primary",
  "secondary",
  "tertiary",
  "outline-white",
  "outline-primary",
  "outline-secondary",
  "outline-tertiary",
] as const;
export const buttonSizes = ["sm", "md", "icon"] as const;
export const buttonRounded = ["xs", "sm", "md", "xl", "full", "none"] as const;
export type ButtonColor = (typeof buttonVariants)[number];
export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];
export type ButtonRounded = (typeof buttonRounded)[number];

export type ButtonWithIconProps = ButtonProps & {
  icon?: React.ReactNode;
  leftIcon?: boolean | React.ReactNode;
  rightIcon?: boolean | React.ReactNode;
};
