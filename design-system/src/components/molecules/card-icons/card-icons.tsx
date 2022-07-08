import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'card-icons',
  styleUrl: 'card-icons.scss',
  shadow: true,
})
export class CardIcons {
  @Prop() like?: { icon: string; amount: string };
  @Prop() seen?: { icon: string; amount: string };
  render() {
    return (
      <Host>
        <div class="container">
          <fa-icons icon={this.like.icon}></fa-icons> {this.like.amount}
        </div>
        <div class="container">
          <fa-icons icon={this.seen.icon}></fa-icons> {this.seen.amount}
        </div>
      </Host>
    );
  }
}
