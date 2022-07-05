import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'text-links',
  styleUrl: 'text-links.scss',
})
export class TextLinks {
  @Prop() text: string;

  render() {
    return <p>{this.text}</p>;
  }
}
