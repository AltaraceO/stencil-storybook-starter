import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'round-button',
  styleUrl: 'round-button.scss',
  shadow: true,
})
export class RoundButton {
  @Prop() text?: string;
  @Prop({ reflect: true }) type?: 'normal' | 'main';
  @Prop({ reflect: true }) size?: 'small' | 'large';
  @Prop({ reflect: true }) border?: 'round' | 'square' | 'none';

  render() {
    return (
      <button class={`${this.size} ${this.type}`}>
        <slot />
      </button>
    );
  }
}
