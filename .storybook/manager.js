import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Hugo Fanchini Components',
    brandUrl: 'https://hugo-fanchini.com',
  },
});
