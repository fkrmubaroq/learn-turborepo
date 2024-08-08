type ControlType =
  | "object"
  | "boolean"
  | "check"
  | "inline-check"
  | "radio"
  | "inline-radio"
  | "select"
  | "multi-select"
  | "number"
  | "range"
  | "file"
  | "color"
  | "date"
  | "text";

type TControl = {
  type: ControlType;
  options?: readonly string[] | string[];
};
export function storyArguments({
  description,
  defaultValue,
  descriptionType = "string",
  control,
  type,
}: {
  type?: "string" | "number" | "boolean" | "function" | "symbol";
  description: string;
  defaultValue: string;
  descriptionType?: string | null;
  control?: TControl;
}) {
  const args: Record<string, unknown> = {
    type,
    description: description as string,
    table: {
      defaultValue: {
        summary: defaultValue,
      },
      type: {
        summary: descriptionType,
      },
    },
  };
  if (control?.options) {
    Object.assign(args, {
      control: {
        type: control.type,
      },
      options: control.options,
    });
  }
  return args;
}
