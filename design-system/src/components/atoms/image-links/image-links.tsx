import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'image-links',
  styleUrl: 'image-links.scss',
  shadow: true,
})
export class ImageLinks {
  @Prop() image: string;
  @Prop() alt: string;

  render() {
    return (
      <div class="image">
        <img src={this.image} alt={this.alt} />
      </div>
    );
  }
}
