import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as bag from '../../assets/card-imgs/giant.jpg';

export default {
  title: 'Organism/Main Card',
} as Meta;

const Template: Story<Components.MainCard> = ({ image, cardicon, cardinfo }) => {
  return html`<main-card .image=${image} .cardicon="${cardicon}" .cardinfo="${cardinfo}"></main-card>`;
};

export const Default: Story<Components.MainCard> = Template.bind({});
Default.args = {
  image: { source: bag, alt: 'testAlt' },
  cardinfo: { head: 'this is a title', author: 'this is an author' },
  cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
};
