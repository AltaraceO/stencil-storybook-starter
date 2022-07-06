import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Header Buttons',
} as Meta;

const Template: Story<Components.HeaderButtons> = ({ buttons }) => {
  return html`<header-buttons buttons="${buttons}"></header-buttons>`;
};

export const Default: Story<Components.HeaderButtons> = Template.bind({});
Default.args = {
  buttons: ['Creative Fields', 'Tools', 'Color', 'Location', 'School', 'Source File', 'Subscriptions'],
};
