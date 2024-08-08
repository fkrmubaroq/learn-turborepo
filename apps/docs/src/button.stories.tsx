import PlusIcon from "@/assets/icons/plus.svg?react";
import Badge, { BadgeVariants } from "@/components/badge";
import {
  type ButtonProps,
  Button,
  ButtonWithIcon,
  buttonRounded,
  buttonSizes,
  buttonVariants,
} from "@/components/button";
import { storyArguments } from "@/lib/stories";
import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";
import React from "react";

type MetaButton = Meta<typeof Button>;
type Story = StoryObj<MetaButton>;

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="p-0">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Button` component is a customizable button that can change colors, sizes, and styles. It is built using CSS-in-JS, which allows you to easily customize its appearance with just a few lines of code.",
      },
    },
  },
} as MetaButton;

const defaultArgs: Story["args"] = {
  children: "Click Me",
  size: "md",
  onClick: () => alert("click me"),
  variant: "primary",
  rounded: "sm",
  disabled: false,
};

export const Base: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
  },
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: storyArguments({
      description: "Sets the text of the button.",
      descriptionType: "React.Node",
      defaultValue: "-",
    }),
    size: storyArguments({
      description: "Sets the size of the button.",
      descriptionType: buttonSizes.join(" | "),
      defaultValue: "md",
      control: {
        type: "radio",
        options: buttonSizes,
      },
    }),
    variant: storyArguments({
      description: "Sets the variant of the button.",
      descriptionType: buttonVariants.join(" | "),
      defaultValue: "primary",
      control: {
        type: "radio",
        options: buttonVariants,
      },
    }),
    onClick: storyArguments({
      description: "The function to be called when the button is clicked.",
      type: "function",
      defaultValue: "-",
    }),
    disabled: storyArguments({
      description: "If true, the button will be disabled.",
      type: "boolean",
      defaultValue: "false",
      control: {
        type: "boolean",
      },
    }),
    rounded: storyArguments({
      description: "Sets rounded of the button.",
      type: "boolean",
      defaultValue: "md",
      control: {
        type: "radio",
        options: buttonRounded,
      },
    }),
  },
};

export const Sizes: Story = {
  render: (args) => {
    const variants = {
      size: buttonSizes,
      variants: [
        "primary",
        "outline-primary",
        "secondary",
        "outline-secondary",
        "tertiary",
        "outline-tertiary",
      ] as ButtonProps["variant"][],
    };

    return (
      <div className="flex flex-col gap-y-3">
        {variants.variants.map((variant, key) => {
          return (
            <div className="flex gap-x-3" key={key}>
              <span>
                <Button size={variants.size[0]} variant={variant} {...args}>
                  Small
                </Button>
              </span>

              <span>
                <Button size={variants.size[1]} variant={variant} {...args}>
                  Medium
                </Button>
              </span>
            </div>
          );
        })}
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const variants: Record<
      string,
      { button: ButtonProps["variant"]; icon: string; text: string }
    > = {
      primary: {
        button: "primary",
        icon: "svg-fill-white",
        text: "Primary",
      },
      "outline-primary": {
        button: "outline-primary",
        icon: "svg-fill-primary",
        text: "Outline Primary",
      },
      secondary: {
        button: "secondary",
        icon: "svg-fill-white",
        text: "Secondary",
      },
      "outline-secondary": {
        button: "outline-secondary",
        icon: "svg-fill-secondary",
        text: "Outline Secondary",
      },
      tertiary: {
        button: "tertiary",
        icon: "svg-fill-white",
        text: "Tertiary",
      },
      "outline-tertiary": {
        button: "outline-tertiary",
        icon: "svg-fill-tertiary",
        text: "Outline Tertiary",
      },
    };
    return (
      <div className="flex flex-col gap-y-3">
        {Object.keys(variants).map((key, index) => {
          return (
            <div className="flex gap-x-3" key={index}>
              <ButtonWithIcon
                variant={variants[key].button}
                leftIcon={
                  <PlusIcon
                    width={10}
                    height={10}
                    className={variants[key].icon}
                  />
                }
                {...args}
              />
              <ButtonWithIcon
                variant={variants[key].button}
                leftIcon={
                  <PlusIcon
                    width={10}
                    height={10}
                    className={variants[key].icon}
                  />
                }
                {...args}
              >
                {variants[key].text}
              </ButtonWithIcon>
              <ButtonWithIcon
                variant={variants[key].button}
                rightIcon={
                  <PlusIcon
                    width={10}
                    height={10}
                    className={variants[key].icon}
                  />
                }
                {...args}
              >
                {variants[key].text}
              </ButtonWithIcon>
              <ButtonWithIcon
                variant={variants[key].button}
                leftIcon={
                  <PlusIcon
                    width={10}
                    height={10}
                    className={variants[key].icon}
                  />
                }
                rightIcon={
                  <PlusIcon
                    width={10}
                    height={10}
                    className={variants[key].icon}
                  />
                }
                {...args}
              >
                {variants[key].text}
              </ButtonWithIcon>
            </div>
          );
        })}
      </div>
    );
  },
  argTypes: {},
};

export const WithBadge: Story = {
  render: (args) => {
    const variants: Record<
      string,
      { button: ButtonProps["variant"]; badge: BadgeVariants; icon?: string }
    > = {
      primary: {
        button: "primary",
        badge: "tertiary",
      },
      secondary: {
        button: "secondary",
        badge: "tertiary",
      },
      tertiary: {
        button: "tertiary",
        badge: "secondary",
      },
      "outline-primary": {
        button: "outline-primary",
        badge: "tertiary",
        icon: "svg-fill-primary",
      },
      "outline-secondary": {
        button: "outline-secondary",
        badge: "tertiary",
        icon: "svg-fill-secondary",
      },
      "outline-tertiary": {
        button: "outline-tertiary",
        badge: "secondary",
        icon: "svg-fill-tertiary",
      },
    };
    return (
      <div className="flex flex-col gap-y-5">
        <div className="flex gap-x-5">
          {Object.keys(variants).map((variant, key) => {
            return (
              <React.Fragment key={key}>
                <span>
                  <Button {...args} variant={variants[variant].button}>
                    <Badge
                      variant={variants[variant].badge}
                      text="+9"
                      position="top-right"
                    />
                    Click Me
                  </Button>
                </span>
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex gap-x-5">
          {Object.keys(variants).map((variant, key) => {
            return (
              <React.Fragment key={key}>
                <span>
                  <ButtonWithIcon
                    {...args}
                    size="icon"
                    variant={variants[variant].button}
                    leftIcon={
                      <PlusIcon
                        className={clsx("shrink-0", {
                          [variants[variant].icon
                            ? variants[variant].icon
                            : "svg-fill-white"]: true,
                        })}
                        width={10}
                        height={10}
                      />
                    }
                  >
                    <Badge text="+9" variant={variants[variant].badge} />
                  </ButtonWithIcon>
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  },
};
