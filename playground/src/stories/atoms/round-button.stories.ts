import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Round Button',
  argTypes: {
    type: {
      options: ['normal', 'main'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'inline-radio' },
    },
    border: {
      options: ['round', 'square', 'none'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.RoundButton> = ({ text, type, size, border }) => {
  return html`<round-button type="${type}" size="${size}" border="${border}">${text}</round-button>`;
};

export const Default: Story<Components.RoundButton> = Template.bind({});
Default.args = {
  border: 'round',
  size: 'small',
  text: 'round normal',
  type: 'normal',
};

export const Large: Story<Components.RoundButton> = Template.bind({});
Large.args = {
  border: 'square',
  size: 'large',
  text: 'large square',
  type: 'normal',
};
