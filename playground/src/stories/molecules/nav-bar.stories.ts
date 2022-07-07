import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Nav Bar',
} as Meta;

const Template: Story<Components.NavBar> = ({ links, buttons }) => {
  return html`<nav-bar .links=${links} .buttons="${buttons}"></nav-bar>`;
};

export const Default: Story<Components.NavBar> = Template.bind({});
Default.args = {
  links: ['Discover', 'Livestream', 'Jobs'],
  buttons: ['Test', 'Log In', 'Sign Up'],
};
