import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'main-header',
  styleUrl: 'main-header.css',
  shadow: true,
})
export class MainHeader {
  render() {
    return (
      <Host>
        <nav-bar></nav-bar>
        <search-bar></search-bar>
        <header-buttons></header-buttons>
      </Host>
    );
  }
}
