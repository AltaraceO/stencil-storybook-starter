import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Molecules/Card Titles',
} as Meta;

const Template: Story<Components.CardTitles> = ({ head, author }) => {
  return html`<card-titles head=${head} author=${author}></card-titles>`;
};

export const Default: Story<Components.CardTitles> = Template.bind({});
Default.args = {
  head: 'this is a title',
  author: 'this is an author',
};
