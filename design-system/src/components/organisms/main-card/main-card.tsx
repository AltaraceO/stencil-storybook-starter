import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'main-card',
  styleUrl: 'main-card.css',
  shadow: true,
})
export class MainCard {
  @Prop() image: { source: string; alt: string };
  render() {
    return (
      <Host>
        <image-links image={this.image.source} alt={this.image.alt}></image-links>
        <div>
          {/* <card-titles head={} author={}></card-titles> */}
          <card-icons></card-icons>
        </div>
      </Host>
    );
  }
}
