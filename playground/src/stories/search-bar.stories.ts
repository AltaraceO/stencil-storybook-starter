import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Search Bar',
} as Meta;

const Template: Story<Components.SearchBar> = ({ buttons }) => {
  return html`<search-bar buttons="${buttons}"></search-bar>`;
};

export const Default: Story<Components.SearchBar> = Template.bind({});
Default.args = {
  buttons: ['Projects', 'Images', 'Prototypes', 'Streams', 'People', 'Moodboards'],
};
