import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: 'Molecules/Card Icons',
} as Meta;

const Template: Story<Components.CardIcons> = ({ like, seen }) => {
  return html`<card-icons .like=${like} .seen=${seen}></card-icons>`;
};

export const Default: Story<Components.CardIcons> = Template.bind({});
Default.args = {
  like: { icon: 'thumbs-up', amount: '333' },
  seen: { icon: 'eye', amount: '444' },
};
