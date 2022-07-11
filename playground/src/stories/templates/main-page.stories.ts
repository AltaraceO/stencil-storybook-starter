import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as bag from '../../assets/card-imgs/bag.jpg';
import * as cat from '../../assets/card-imgs/cat.jpg';
import * as coat from '../../assets/card-imgs/coat.jpg';
import * as dance from '../../assets/card-imgs/dance.jpg';
import * as denim from '../../assets/card-imgs/denim.jpg';
import * as drink from '../../assets/card-imgs/drink.jpg';
import * as flowerLady from '../../assets/card-imgs/flowerLady.jpg';
import * as football from '../../assets/card-imgs/football.jpg';
import * as giant from '../../assets/card-imgs/giant.jpg';
import * as living from '../../assets/card-imgs/living.jpg';
import * as logo from '../../assets/card-imgs/logo.png';
import * as man from '../../assets/card-imgs/man.jpg';
import * as mattress from '../../assets/card-imgs/mattress.jpg';
import * as memphis from '../../assets/card-imgs/memphis.jpg';
import * as mushrooms from '../../assets/card-imgs/mushrooms.jpg';
import * as rocks from '../../assets/card-imgs/rocks.jpg';
import * as shapes from '../../assets/card-imgs/shapes.jpg';
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
    logo: logo,
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
      cardinfo: { head: 'this is a title', author: 'Linda' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },

    {
      image: { source: dance, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'John' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: flowerLady, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Kevin' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: giant, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Bill' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: mattress, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Henry' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: memphis, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Troy' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: mushrooms, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Ben' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: spaceShip, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Mandy' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },

    {
      image: { source: coat, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Tami' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: man, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Lee' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: cat, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Sharon' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: shapes, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Scarlet' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: living, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Gil' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: drink, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Guy' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: denim, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Dana' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: rocks, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Teresa' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: xerox, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Eric' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
    {
      image: { source: football, alt: 'testAlt' },
      cardinfo: { head: 'this is a title', author: 'Tig' },
      cardicon: { like: { icon: 'thumbs-up', amount: '999' }, seen: { icon: 'eye', amount: '888' } },
    },
  ],
};
