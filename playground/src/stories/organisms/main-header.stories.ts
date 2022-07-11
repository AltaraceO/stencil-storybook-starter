import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as logo from '../../assets/card-imgs/logo.png';

export default {
  title: 'Organism/Main Header',
} as Meta;

const Template: Story<Components.MainHeader> = ({ navLinks, navButtons, logo, searchButtons, headerButtons }) => {
  return html`<main-header .headerButtons=${headerButtons} .searchButtons=${searchButtons} .navLinks=${navLinks} .navButtons=${navButtons} logo=${logo}></main-header>`;
};

export const Default: Story<Components.MainHeader> = Template.bind({});
Default.args = {
  navLinks: ['Discover', 'Livestream', 'Jobs'],
  navButtons: ['Log In', 'Sign Up'],
  logo: logo,
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
};
