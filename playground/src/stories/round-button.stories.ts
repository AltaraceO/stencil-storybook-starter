import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Round Button',
} as Meta;

const Template: Story<Components.RoundButton> = ({ text }) => {
  return html`<round-button text="${text}"></round-button>`;
};

export const Default: Story<Components.RoundButton> = Template.bind({});
Default.args = {
  text: 'Oohn',
};
