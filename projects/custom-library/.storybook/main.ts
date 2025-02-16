import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  core: {
    builder: 'webpack5',
  },
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
