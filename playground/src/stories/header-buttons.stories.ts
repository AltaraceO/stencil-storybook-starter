import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Header Buttons',
} as Meta;

const Template: Story<Components.HeaderButtons> = ({ buttons }) => {
  return html`<header-buttons .buttons="${buttons}"></header-buttons>`;
};

export const Default: Story<Components.HeaderButtons> = Template.bind({});
Default.args = {
  buttons: [
    { title: 'Creative Fields', icon: 'shapes' },
    { title: 'Tools', icon: 'screwdriver-wrench' },
    { title: 'Color', icon: 'droplet' },
    { title: 'Location', icon: 'location-dot' },
    { title: 'School', icon: 'graduation-cap' },
    { title: 'Source File', icon: 'paperclip' },
    { title: 'Subscriptions', icon: 'user-lock' },
  ],
};
