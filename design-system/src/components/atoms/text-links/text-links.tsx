import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'text-links',
  styleUrl: 'text-links.scss',
  shadow: true,
})
export class TextLinks {
  @Prop() text: string;
  @Prop({ reflect: true }) size?: 'small' | 'medium' | 'large' = 'large';
  @Prop({ reflect: true }) weight?: '400' | '700' = '400';

  render() {
    return <div class="link">{this.text}</div>;
  }
}
