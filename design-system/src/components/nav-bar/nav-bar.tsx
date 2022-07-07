import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.scss',
})
export class NavBar implements ComponentInterface {
  @Prop() links?: string[];
  @Prop() buttons?: string[];

  render() {
    return (
      <div class="container">
        <div class="spaces-between">
          {this.links?.map((link: string) => {
            return <text-links text={link}></text-links>;
          })}
        </div>
        <div class="spaces-between">
          {this.buttons?.map((button: string) => {
            if (button === 'Sign Up') {
              return (
                <round-button type="main" size="small" border="round">
                  {button}
                </round-button>
              );
            }
            return (
              <round-button type="normal" size="small" border="round">
                {button}
              </round-button>
            );
          })}
        </div>
      </div>
    );
  }
}
