import { create } from '@storybook/theming';
import logo  from './img/CA-Full-Logo-Red.svg';

let red = '#D83933';
let offWhite = '#F5F5F0'
let darkGray = '#1B1B1B'
let black = '#000';
let white = '#fff';

export default create({
    base: 'light',
    brandTitle: 'CivicActions Front End Resource Library',
    brandUrl: 'https://civicactions.com',
    brandImage: logo,
    brandTarget: '_self',

    colorPrimary: red,
    colorSecondary: darkGray,

    // UI
    appBg: offWhite,
    appBorderColor: darkGray,
    appBorderRadius: 0,

    // Toolbar
    barBg: white,

    // Form colors
    inputBg: white,
    inputBorderRadius: 0,
});
