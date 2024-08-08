import clsx from "clsx";
import Button from "./button";
import styles from "./button-with-icon.module.css";
import { ButtonWithIconProps } from "./button.types";

export default function ButtonWithIcon({
  children,
  className,
  icon,
  leftIcon,
  rightIcon,
  ...props
}: ButtonWithIconProps) {
  return (
    <Button className={clsx(styles["button-with-icon"], className)} {...props}>
      {(leftIcon && icon) || leftIcon}
      {children}
      {(rightIcon && icon) || rightIcon}
    </Button>
  );
}
