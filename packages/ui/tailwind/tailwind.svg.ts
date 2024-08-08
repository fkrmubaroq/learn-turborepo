/* eslint-disable @typescript-eslint/no-var-requires */
import plugin from "tailwindcss/plugin";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// custom color fill utility for svg elements (e.g: svg-fill-[arbitary] or svg-fill-primary)
export default plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "svg-fill": (value) => {
        return {
          "> *": {
            fill: value,
          },
        };
      },
    },
    {
      values: flattenColorPalette(theme("colors")),
    }
  );
});
