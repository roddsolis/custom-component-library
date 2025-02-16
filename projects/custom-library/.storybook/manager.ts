import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
// import kipitTheme from './kipitTheme';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'kiplogo',
    brandImage:
      'https://raw.githubusercontent.com/roddsolis/custom-component-library/refs/heads/master/projects/custom-library/public/logo.png',

    // Typography
    fontBase: 'Figtree, serif',
    fontCode: 'monospace',

    //
    colorPrimary: '#5B62DA',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#F1F4F8',
    appContentBg: '#F1F4F8',
    appPreviewBg: '#F1F4F8',
    appBorderColor: '#F1F4F8',
    appBorderRadius: 8,

    // Text colors
    textColor: '#2A323C',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#2A323C',
    barSelectedColor: '#2A323C',
    barHoverColor: '#585C6D',
    barBg: '#fff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
  }),
});
