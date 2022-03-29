import { defineConfig } from 'vite-plugin-windicss';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      serif: ['Montserrat', 'ui-serif', 'Georgia'],
      mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        'primary': {
          '300': '#CCF5F5',
          '500': '#76D0D3',
          '700': '#63B9BD',
        },
        'secondary': {
          '300': '#2E8C94',
          '500': '#1F737D',
          '700': '#00424F',
        },
        'complementary': {
          '300': '#FFEFCA',
          '500': '#F6CD61',
          '800': '#C49F34',
        },
        'highlight': {
          '300': '#FFE5D9',
          '500': '#FE8A71',
          '800': '#D3654F',
        },
        'base': {
          '100': '#FBFBFB',
          '200': '#F2F2F2',
          '400': '#D9D9D9',
          '500': '#C1C1C1',
          '700': '#808080',
          '900': '#303030',
        },
        'danger': {
          '300': '#FED1D6',
          '500': '#CA1628',
          '800': '#940614',
        },
        'success': {
          '300': '#CBFAD5',
          '500': '#3EBB59',
        },
        'warning': {
          '300': '#FFF3D3',
          '500': '#E6B535',
        },
      },
    },
  },
});
