import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Main Header',
} as Meta;

const Template: Story<Components.MainHeader> = () => {
  return html`<main-header></main-header>`;
};

export const Default: Story<Components.MainHeader> = Template.bind({});
// Default.args = {};
