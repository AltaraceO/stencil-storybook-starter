import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'card-titles',
  styleUrl: 'card-titles.scss',
  shadow: true,
})
export class CardTitles {
  @Prop() head: { text: string; size: 'small' | 'medium' | 'large'; weight: '400' | '700' };
  @Prop() author: { text: string; size: 'small' | 'medium' | 'large'; weight: '400' | '700' };

  render() {
    return (
      <Host>
        <text-links weight={this.head.weight} size={this.head.size} text={this.head.text}></text-links>
        <text-links weight={this.author.weight} size={this.author.size} text={this.author.text}></text-links>
      </Host>
    );
  }
}
