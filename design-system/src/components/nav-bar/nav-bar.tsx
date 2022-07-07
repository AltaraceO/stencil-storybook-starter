import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.scss',
})
export class NavBar {
  @Prop() links?: string[] = ['Discover', 'Livestream', 'Jobs'];
  @Prop() buttons?: string[] = ['Log In', 'Sign Up'];

  render() {
    return (
      <div class="container">
        <div class="spaces-between">
          {this.links?.map((link: string) => {
            return <text-links text={link}></text-links>;
          })}
        </div>
        <div class="spaces-between">
          {this.buttons.map((button: string) => {
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
