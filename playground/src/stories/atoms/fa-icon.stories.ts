import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Atoms/Fa Icons',
} as Meta;

const Template: Story<Components.FaIcons> = ({ icon }) => {
  return html`<fa-icons icon=${icon}></fa-icons>`;
};

export const Default: Story<Components.FaIcons> = Template.bind({});
Default.args = {
  icon: 'shapes',
};
