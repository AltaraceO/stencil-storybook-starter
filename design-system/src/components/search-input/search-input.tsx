import { Component, h } from '@stencil/core';

@Component({
  tag: 'search-input',
  styleUrl: 'search-input.scss',
  shadow: true,
})
export class SearchInput {
  render() {
    return <input class="text-input" type="text" />;
  }
}
