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
  buttons: [
    { title: 'Creative Fields', icon: 'shapes' },
    { title: 'Tools', icon: 'trash' },
    { title: 'Color', icon: 'trash' },
    { title: 'Location', icon: 'trash' },
    { title: 'School', icon: 'trash' },
    { title: 'Source File', icon: 'trash' },
    { title: 'Subscriptions', icon: 'trash' },
  ],
};
