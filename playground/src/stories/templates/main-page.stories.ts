import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as bag from '../../assets/card-imgs/bag.jpg';
import * as dance from '../../assets/card-imgs/dance.jpg';
import * as flowerLady from '../../assets/card-imgs/flowerLady.jpg';
import * as giant from '../../assets/card-imgs/giant.jpg';
import * as mattress from '../../assets/card-imgs/mattress.jpg';
import * as memphis from '../../assets/card-imgs/memphis.jpg';
import * as mushrooms from '../../assets/card-imgs/mushrooms.jpg';
import * as spaceShip from '../../assets/card-imgs/space-ship.jpg';
import * as xerox from '../../assets/card-imgs/xerox.jpg';

export default {
  title: 'Template/Main Page',
} as Meta;

// const Template: Story<Components.MainPage['cards']> = ({ header, cards }) => {
const Template: Story<Components.MainPage> = ({ header, cards }) => {
  return html`<main-page .header=${header} .cards=${cards}></main-page>`;
};

export const Default: Story<Components.MainPage> = Template.bind({});
Default.args = {
  header: {
    navLinks: ['Discover', 'Livestream', 'Jobs'],
    navButtons: ['Log In', 'Sign Up'],
    searchButtons: ['Projects', 'Images', 'Prototypes', 'Streams', 'People', 'Moodboards'],
    headerButtons: [
      { title: 'Creative Fields', icon: 'shapes' },
      { title: 'Tools', icon: 'screwdriver-wrench' },
      { title: 'Color', icon: 'droplet' },
      { title: 'Location', icon: 'location-dot' },
      { title: 'School', icon: 'graduation-cap' },
      { title: 'Source File', icon: 'paperclip' },
      { title: 'Subscriptions', icon: 'user-lock' },
    ],
  },
  cards: [
    {
      image: { source: bag, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },

    {
      image: { source: dance, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: flowerLady, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: giant, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: mattress, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: memphis, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: mushrooms, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: spaceShip, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },

    {
      image: { source: xerox, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'this is an author' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
  ],
};
