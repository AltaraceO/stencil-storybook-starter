import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'header-buttons',
  styleUrl: 'header-buttons.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class HeaderButtons {
  @Prop() buttons: { title: string; icon: string }[];

  render() {
    return (
      <div class="spaces-between">
        {this.buttons.map((button) => {
          return (
            <round-button type="normal" size="small" border="square">
              <fa-icons icon={button.icon}></fa-icons> {button.title}
            </round-button>
          );
        })}
      </div>
    );
  }
}
