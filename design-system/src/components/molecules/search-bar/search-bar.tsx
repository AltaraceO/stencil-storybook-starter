import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'search-bar',
  //styleUrlS! allows for multiple imports
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  @Prop() buttons: string[];

  render() {
    return (
      <div class="search-container">
        <div class="input-container">
          <input placeholder="Search the creative world at work" type="text" />
        </div>
        <div class="buttons-container">
          {this.buttons.map((button: string) => {
            return (
              <round-button type="normal" size="small" border="none">
                {button}
              </round-button>
            );
          })}
        </div>
      </div>
    );
  }
}
