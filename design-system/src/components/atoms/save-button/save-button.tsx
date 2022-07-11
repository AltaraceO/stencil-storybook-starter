import { Component, h } from '@stencil/core';

@Component({
  tag: 'save-button',
  styleUrl: 'save-button.scss',
  shadow: true,
})
export class SaveButton {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
