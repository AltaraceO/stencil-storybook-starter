import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { RoundButton } from './round-button';

it('should render button with text', async () => {
  const greeting = 'Hello';
  const page = await newSpecPage({
    components: [RoundButton],
    template: () => <round-button>{greeting}</round-button>,
  });
  expect(page.root).toEqualHtml(`

  `);
});
