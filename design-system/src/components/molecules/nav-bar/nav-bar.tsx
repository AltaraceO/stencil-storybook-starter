import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.scss',
  shadow: true,
})
export class NavBar implements ComponentInterface {
  @Prop() links?: string[];
  @Prop() buttons?: string[];
  @Prop() image?: { image: string; alt: string };
  @Prop() logo?: string;

  render() {
    return (
      <div class="container">
        <img src={this.logo} alt="textuallogo" />
        <div class="spaces-between">
          <image-link></image-link>
          {this.links?.map((link: string) => {
            return (
              <text-links size="large" weight="400">
                {link}
              </text-links>
            );
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
