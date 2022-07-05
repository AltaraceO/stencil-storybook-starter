import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  @Prop() buttons: string[] = ['Projects', 'Images', 'Prototypes', 'Streams', 'People', 'Moodboards'];

  render() {
    return (
      <div class="search-container">
        <div class="input-container">
          {/* <search-input></search-input> */}
          <input type="text" />
        </div>
        <div class="buttons-container">
          {this.buttons.map((button: string) => {
            return <round-button type="normal" size="small" border="round" text={button}></round-button>;
          })}
        </div>
      </div>
    );
  }
}