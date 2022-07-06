import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'header-buttons',
  styleUrl: 'header-buttons.scss',
  shadow: true,
})
export class HeaderButtons {
  @Prop() buttons: string[] = ['Creative Fields', 'Tools', 'Color', 'Location', 'School', 'Source File', 'Subscriptions'];

  render() {
    return (
      <div class="spaces-between">
        {this.buttons.map((button: string) => {
          return <round-button type="normal" size="large" border="square" text={button}></round-button>;
        })}
      </div>
    );
  }
}
