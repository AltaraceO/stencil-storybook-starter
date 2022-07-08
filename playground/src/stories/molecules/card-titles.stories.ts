import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Card Titles',
} as Meta;

const Template: Story<Components.CardTitles> = ({ head, author }) => {
  return html`<card-titles .head=${head} .author=${author}></card-titles>`;
};

export const Default: Story<Components.CardTitles> = Template.bind({});
Default.args = {
  head: { text: 'this is a title', size: 'large', weight: '700' },
  author: { text: 'this is an author', size: 'medium', weight: '400' },
};
