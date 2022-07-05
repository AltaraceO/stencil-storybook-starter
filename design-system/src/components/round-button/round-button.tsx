import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'round-button',
  styleUrl: 'round-button.css',
})
export class RoundButton {
  @Prop() text?: string;

  render() {
    return (
      <Host>
        <button> {this.text} </button>
      </Host>
    );
  }
}
