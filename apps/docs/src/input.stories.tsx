import { Input } from "@/components/input";
import { storyArguments } from "@/lib/stories";
import { loremIpsum } from "@/lib/variables/constant";
import type { Meta, StoryObj } from "@storybook/react";

type MetaInput = Meta<typeof Input>;
type Story = StoryObj<MetaInput>;

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: loremIpsum,
      },
    },
  },
} as MetaInput;

const defaultArgs: Story["args"] = {
  placeholder: "Username",
  value: "",
};

export const Base: Story = {
  args: {
    ...defaultArgs,
  },
  argTypes: {
    placeholder: storyArguments({
      description: loremIpsum,
      descriptionType: "string",
      defaultValue: "optional",
    }),
    value: storyArguments({
      description: loremIpsum,
      descriptionType: "string",
      defaultValue: "required",
    }),
    className: storyArguments({
      description: loremIpsum,
      descriptionType: "",
      defaultValue: "optional",
    }),
    onChange: storyArguments({
      description: loremIpsum,
      descriptionType: "function",
      defaultValue: "required",
    }),
  },
};
