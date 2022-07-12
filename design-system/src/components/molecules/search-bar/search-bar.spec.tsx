import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { SearchBar } from './search-bar';

it('should render button with text', async () => {
  const onNewvalue = jest.fn();
  const page = await newSpecPage({
    components: [SearchBar],
    template: () => <search-bar onNewvalue={onNewvalue}></search-bar>,
  });

  const input: HTMLInputElement = page.root.shadowRoot.querySelector('input');
  input.value = '44';
  input.dispatchEvent(new Event('input'));
  await page.waitForChanges();

  expect(page.rootInstance.value).toEqual('44');
  expect(onNewvalue).toHaveBeenCalledTimes(1);
  expect(onNewvalue.mock.calls[0][0].detail).toEqual('44');
  // const input = page.root.shadowRoot.querySelector('input');
  //   input?.type
  // input.value = 'hello';
  // input.dispatchEvent(new Event('input'));
  // await page.waitForChanges();
  // expect(input.textContent).toEqual('');
});
