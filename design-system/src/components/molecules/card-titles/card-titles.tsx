import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'card-titles',
  styleUrl: 'card-titles.scss',
  shadow: true,
})
export class CardTitles {
  @Prop() head?: string;
  @Prop() author?: string;

  render() {
    return (
      <Host>
        <text-links weight="700" size="large">
          {this.head}
        </text-links>
        <text-links weight="400" size="medium">
          {this.author}
        </text-links>
      </Host>
    );
  }
}
