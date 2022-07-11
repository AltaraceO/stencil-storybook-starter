import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'main-card',
  styleUrl: 'main-card.scss',
  shadow: true,
})
export class MainCard {
  @Prop() image: { source: string; alt: string };
  @Prop() cardinfo?: { head: string; author: string };
  @Prop() cardicon?: { like: { icon: string; amount: string }; seen: { icon: string; amount: string } };

  render() {
    return (
      <Host>
        <div class="img-container">
          <image-links image={this.image.source} alt={this.image.alt}></image-links>

          <save-button class="button">
            <fa-icons icon="folder-open"></fa-icons> Save
          </save-button>
        </div>
        <div class="info">
          <card-titles head={this.cardinfo.head} author={this.cardinfo.author}></card-titles>
          <card-icons like={this.cardicon.like} seen={this.cardicon.seen}></card-icons>
        </div>
      </Host>
    );
  }
}
