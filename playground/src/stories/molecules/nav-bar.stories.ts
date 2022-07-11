import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as logo from '../../assets/card-imgs/logo.png';

export default {
  title: 'Molecules/Nav Bar',
} as Meta;

const Template: Story<Components.NavBar> = ({ links, buttons, logo }) => {
  return html`<nav-bar logo=${logo} .links=${links} .buttons="${buttons}"></nav-bar>`;
};

export const Default: Story<Components.NavBar> = Template.bind({});
Default.args = {
  links: ['Discover', 'Livestream', 'Jobs'],
  buttons: ['Test', 'Log In', 'Sign Up'],
  logo: logo,
};
