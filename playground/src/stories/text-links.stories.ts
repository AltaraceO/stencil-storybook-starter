import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Text Links',
} as Meta;

const Template: Story<Components.TextLinks> = ({ text }) => {
  return html`<text-links text="${text}" "></text-links>`;
};

export const Default: Story<Components.TextLinks> = Template.bind({});
Default.args = {
  text: 'hello',
};
