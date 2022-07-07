import { Component, h, Host, Prop } from '@stencil/core';
import Helmet from '@stencil/helmet';

@Component({
  tag: 'fa-icons',
  styleUrl: 'fa-icons.scss',
  shadow: true,
})
export class FaIcons {
  @Prop() icon: string;
  renderIcon(icon: string) {
    return [
      <Helmet>
        <script src="https://kit.fontawesome.com/7738a82edc.js" crossorigin="anonymous"></script>
      </Helmet>,
      <i class={`fas fa-${icon} fa-sm icon`}></i>,
    ];
  }
  render() {
    return <Host>{this.renderIcon(this.icon)}</Host>;
  }
}
