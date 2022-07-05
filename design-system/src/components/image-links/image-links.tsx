import { Component, getAssetPath, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'image-links',
  styleUrl: 'image-links.scss',
  shadow: true,
})
export class ImageLinks {
  @Prop() image: string;

  render() {
    const imageSrc = getAssetPath(`./assets/${this.image}`);
    return (
      <Host>
        return <img src={imageSrc} />
      </Host>
    );
  }
}
