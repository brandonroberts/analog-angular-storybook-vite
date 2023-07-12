import type { StorybookConfig } from "@storybook/angular";

process.env.NODE_ENV = "test";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  "core": {
    "builder": "@storybook/builder-vite"
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
