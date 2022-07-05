import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'round-button',
  styleUrl: 'round-button.scss',
})
export class RoundButton {
  @Prop() text?: string;
  @Prop() type?: 'normal' | 'main';
  @Prop() border?: 'round' | 'square';
  @Prop() size?: 'small' | 'large';

  render() {
    return (
      <Host>
        <button class={`${this.size} ${this.border} ${this.type}`}> {this.text} </button>
      </Host>
    );
  }
}
