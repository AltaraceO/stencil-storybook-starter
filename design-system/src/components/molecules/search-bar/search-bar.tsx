import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

export interface valueType {
  val: string;
}

@Component({
  tag: 'search-bar',
  //styleUrlS! allows for multiple imports
  styleUrl: 'search-bar.scss',
  shadow: true,
})
export class SearchBar {
  @Prop() buttons: string[];
  @Prop({ mutable: true }) value: string;
  @Event() newvalue: EventEmitter;

  handleChange(event) {
    const val = event.target.value;
    this.value = val;
    this.newvalue.emit(val);
  }

  render() {
    return (
      <div class="search-container">
        <div class="input-container">
          <input onInput={(event) => this.handleChange(event)} value={this.value} placeholder="Search the creative world at work" type="text" />
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
