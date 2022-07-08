import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as bag from '../../assets/card-imgs/giant.jpg';

export default {
  title: 'Atoms/Image Links',
} as Meta;

const Template: Story<Components.ImageLinks> = ({ image, alt }) => {
  return html`<image-links alt=${alt} image=${image}></image-links>`;
};

export const Default: Story<Components.ImageLinks> = Template.bind({});
Default.args = {
  image: bag,
  alt: 'test',
};
