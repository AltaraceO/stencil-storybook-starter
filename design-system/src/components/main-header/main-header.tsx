import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'main-header',
  styleUrl: 'main-header.css',
  shadow: true,
})
export class MainHeader {
  @Prop() navLinks?: string[];
  @Prop() navButtons?: string[];
  @Prop() searchButtons?: string[];
  @Prop() headerButtons?: { title: string; icon: string }[];

  render() {
    return (
      <Host>
        <nav-bar links={this.navLinks} buttons={this.navButtons}></nav-bar>
        <search-bar buttons={this.searchButtons}></search-bar>
        <header-buttons buttons={this.headerButtons}></header-buttons>
      </Host>
    );
  }
}
