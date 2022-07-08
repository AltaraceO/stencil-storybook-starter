import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss',
  shadow: true,
})
export class MainPage {
  @Prop() header: { navLinks: string[]; navButtons: string[]; searchButtons: string[]; headerButtons: { title: string; icon: string }[] };
  @Prop() cards: {
    image: { source: string; alt: string };
    cardinfo: { head: string; author: string };
    cardicon: { like: { icon: string; amount: string }; seen: { icon: string; amount: string } };
  }[];
  render() {
    return (
      <Host>
        <main-header
          navLinks={this.header.navLinks}
          navButtons={this.header.navButtons}
          searchButtons={this.header.searchButtons}
          headerButtons={this.header.headerButtons}
        ></main-header>
        {/* use grid */}
        <div class="container">
          {this.cards.map((card) => {
            return <main-card class="card" image={card.image} cardinfo={card.cardinfo} cardicon={card.cardicon}></main-card>;
          })}
        </div>
      </Host>
    );
  }
}
