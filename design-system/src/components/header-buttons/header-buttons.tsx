import { Component, h, Prop } from '@stencil/core';
import Helmet from '@stencil/helmet';

@Component({
  tag: 'header-buttons',
  styleUrl: 'header-buttons.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class HeaderButtons {
  @Prop() buttons: { title: string; icon: string }[] = [
    { title: 'Creative Fields', icon: 'shapes' },
    { title: 'Tools', icon: 'screwdriver-wrench' },
    { title: 'Color', icon: 'droplet' },
    { title: 'Location', icon: 'location-dot' },
    { title: 'School', icon: 'graduation-cap' },
    { title: 'Source File', icon: 'paperclip' },
    { title: 'Subscriptions', icon: 'user-lock' },
  ];

  renderIcon(icon: string) {
    return [
      <Helmet>
        <script src="https://kit.fontawesome.com/7738a82edc.js" crossorigin="anonymous"></script>
      </Helmet>,
      <i class={`fas fa-${icon} fa-sm icon`}></i>,
    ];
  }

  render() {
    return (
      <div class="spaces-between">
        {this.buttons.map((button) => {
          return (
            <round-button type="normal" size="large" border="square">
              {this.renderIcon(button.icon)} {button.title}
            </round-button>
          );
        })}
      </div>
    );
  }
}
