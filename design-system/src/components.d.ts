/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        "first"?: string;
        "last"?: string;
    }
    interface RoundButton {
        "border"?: 'round' | 'square';
        "size"?: 'small' | 'large';
        "text"?: string;
        "type"?: 'normal' | 'main';
    }
    interface TextLinks {
        "text": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLRoundButtonElement extends Components.RoundButton, HTMLStencilElement {
    }
    var HTMLRoundButtonElement: {
        prototype: HTMLRoundButtonElement;
        new (): HTMLRoundButtonElement;
    };
    interface HTMLTextLinksElement extends Components.TextLinks, HTMLStencilElement {
    }
    var HTMLTextLinksElement: {
        prototype: HTMLTextLinksElement;
        new (): HTMLTextLinksElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "round-button": HTMLRoundButtonElement;
        "text-links": HTMLTextLinksElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "first"?: string;
        "last"?: string;
    }
    interface RoundButton {
        "border"?: 'round' | 'square';
        "size"?: 'small' | 'large';
        "text"?: string;
        "type"?: 'normal' | 'main';
    }
    interface TextLinks {
        "text"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "round-button": RoundButton;
        "text-links": TextLinks;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "round-button": LocalJSX.RoundButton & JSXBase.HTMLAttributes<HTMLRoundButtonElement>;
            "text-links": LocalJSX.TextLinks & JSXBase.HTMLAttributes<HTMLTextLinksElement>;
        }
    }
}
