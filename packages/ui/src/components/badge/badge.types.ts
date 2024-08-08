import { BadgePosition, BadgeVariants } from "./badge";

export type BadgeProps = {
  variant: BadgeVariants;
  text: string;
  className?: string;
  position?: BadgePosition;
};
