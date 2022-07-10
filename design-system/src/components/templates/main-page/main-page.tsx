import { Component, h, Host, Listen, Prop, State } from '@stencil/core';

import { Card, Header } from './main-page.type';

@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss',
  shadow: true,
})
export class MainPage {
  @Prop() header: Header;
  @Prop() cards: Card[];
  @State() cardInfo: Card[];

  @Listen('newvalue', { target: 'body' })
  searchText(e: CustomEvent<string>) {
    this.cardInfo = this.cards.filter((el) => el.cardinfo.author.toLowerCase().includes(e.detail));
  }

  componentWillLoad() {
    this.cardInfo = this.cards;
  }

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
          {this.cardInfo.map((card) => {
            return <main-card class="card" image={card.image} cardinfo={card.cardinfo} cardicon={card.cardicon}></main-card>;
          })}
        </div>
      </Host>
    );
  }
}
