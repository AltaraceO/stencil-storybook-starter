import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'card-titles',
  styleUrl: 'card-titles.css',
  shadow: true,
})
export class CardTitles {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
