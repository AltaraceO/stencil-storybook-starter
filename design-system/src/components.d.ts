/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ImageLinks {
        "image": string;
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
    }
    interface NavBar {
        "buttons"?: string[];
        "links"?: string[];
    }
    interface RoundButton {
        "border"?: 'round' | 'square';
        "size"?: 'small' | 'large';
        "text"?: string;
        "type"?: 'normal' | 'main';
    }
    interface SearchBar {
        "buttons": string[];
    }
    interface SearchInput {
    }
    interface TextLinks {
        "text": string;
    }
}
declare global {
    interface HTMLImageLinksElement extends Components.ImageLinks, HTMLStencilElement {
    }
    var HTMLImageLinksElement: {
        prototype: HTMLImageLinksElement;
        new (): HTMLImageLinksElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLRoundButtonElement extends Components.RoundButton, HTMLStencilElement {
    }
    var HTMLRoundButtonElement: {
        prototype: HTMLRoundButtonElement;
        new (): HTMLRoundButtonElement;
    };
    interface HTMLSearchBarElement extends Components.SearchBar, HTMLStencilElement {
    }
    var HTMLSearchBarElement: {
        prototype: HTMLSearchBarElement;
        new (): HTMLSearchBarElement;
    };
    interface HTMLSearchInputElement extends Components.SearchInput, HTMLStencilElement {
    }
    var HTMLSearchInputElement: {
        prototype: HTMLSearchInputElement;
        new (): HTMLSearchInputElement;
    };
    interface HTMLTextLinksElement extends Components.TextLinks, HTMLStencilElement {
    }
    var HTMLTextLinksElement: {
        prototype: HTMLTextLinksElement;
        new (): HTMLTextLinksElement;
    };
    interface HTMLElementTagNameMap {
        "image-links": HTMLImageLinksElement;
        "my-component": HTMLMyComponentElement;
        "nav-bar": HTMLNavBarElement;
        "round-button": HTMLRoundButtonElement;
        "search-bar": HTMLSearchBarElement;
        "search-input": HTMLSearchInputElement;
        "text-links": HTMLTextLinksElement;
    }
}
declare namespace LocalJSX {
    interface ImageLinks {
        "image"?: string;
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
    }
    interface NavBar {
        "buttons"?: string[];
        "links"?: string[];
    }
    interface RoundButton {
        "border"?: 'round' | 'square';
        "size"?: 'small' | 'large';
        "text"?: string;
        "type"?: 'normal' | 'main';
    }
    interface SearchBar {
        "buttons"?: string[];
    }
    interface SearchInput {
    }
    interface TextLinks {
        "text"?: string;
    }
    interface IntrinsicElements {
        "image-links": ImageLinks;
        "my-component": MyComponent;
        "nav-bar": NavBar;
        "round-button": RoundButton;
        "search-bar": SearchBar;
        "search-input": SearchInput;
        "text-links": TextLinks;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "image-links": LocalJSX.ImageLinks & JSXBase.HTMLAttributes<HTMLImageLinksElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "round-button": LocalJSX.RoundButton & JSXBase.HTMLAttributes<HTMLRoundButtonElement>;
            "search-bar": LocalJSX.SearchBar & JSXBase.HTMLAttributes<HTMLSearchBarElement>;
            "search-input": LocalJSX.SearchInput & JSXBase.HTMLAttributes<HTMLSearchInputElement>;
            "text-links": LocalJSX.TextLinks & JSXBase.HTMLAttributes<HTMLTextLinksElement>;
        }
    }
}
