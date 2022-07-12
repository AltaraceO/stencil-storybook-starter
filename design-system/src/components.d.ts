/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Card, Header } from "./components/templates/main-page/main-page.type";
export namespace Components {
    interface CardIcons {
        "like"?: { icon: string; amount: string };
        "seen"?: { icon: string; amount: string };
    }
    interface CardTitles {
        "author"?: string;
        "head"?: string;
    }
    interface FaIcons {
        "icon": string;
    }
    interface HeaderButtons {
        "buttons": { title: string; icon: string }[];
    }
    interface ImageLinks {
        "alt": string;
        "image": string;
    }
    interface MainCard {
        "cardicon"?: { like: { icon: string; amount: string }; seen: { icon: string; amount: string } };
        "cardinfo"?: { head: string; author: string };
        "image": { source: string; alt: string };
    }
    interface MainHeader {
        "headerButtons"?: { title: string; icon: string }[];
        "logo"?: string;
        "navButtons"?: string[];
        "navLinks"?: string[];
        "searchButtons"?: string[];
    }
    interface MainPage {
        "cards": Card[];
        "header": Header;
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
    }
    interface NavBar {
        "buttons"?: string[];
        "image"?: { image: string; alt: string };
        "links"?: string[];
        "logo"?: string;
    }
    interface RoundButton {
        "border"?: 'round' | 'square' | 'none';
        "size"?: 'small' | 'large';
        "text"?: string;
        "type"?: 'normal' | 'main';
    }
    interface SaveButton {
    }
    interface SearchBar {
        "buttons"?: string[];
        "value": string;
    }
    interface SearchInput {
    }
    interface TextLinks {
        "size"?: 'small' | 'medium' | 'large';
        "text": string;
        "weight"?: '400' | '700';
    }
}
declare global {
    interface HTMLCardIconsElement extends Components.CardIcons, HTMLStencilElement {
    }
    var HTMLCardIconsElement: {
        prototype: HTMLCardIconsElement;
        new (): HTMLCardIconsElement;
    };
    interface HTMLCardTitlesElement extends Components.CardTitles, HTMLStencilElement {
    }
    var HTMLCardTitlesElement: {
        prototype: HTMLCardTitlesElement;
        new (): HTMLCardTitlesElement;
    };
    interface HTMLFaIconsElement extends Components.FaIcons, HTMLStencilElement {
    }
    var HTMLFaIconsElement: {
        prototype: HTMLFaIconsElement;
        new (): HTMLFaIconsElement;
    };
    interface HTMLHeaderButtonsElement extends Components.HeaderButtons, HTMLStencilElement {
    }
    var HTMLHeaderButtonsElement: {
        prototype: HTMLHeaderButtonsElement;
        new (): HTMLHeaderButtonsElement;
    };
    interface HTMLImageLinksElement extends Components.ImageLinks, HTMLStencilElement {
    }
    var HTMLImageLinksElement: {
        prototype: HTMLImageLinksElement;
        new (): HTMLImageLinksElement;
    };
    interface HTMLMainCardElement extends Components.MainCard, HTMLStencilElement {
    }
    var HTMLMainCardElement: {
        prototype: HTMLMainCardElement;
        new (): HTMLMainCardElement;
    };
    interface HTMLMainHeaderElement extends Components.MainHeader, HTMLStencilElement {
    }
    var HTMLMainHeaderElement: {
        prototype: HTMLMainHeaderElement;
        new (): HTMLMainHeaderElement;
    };
    interface HTMLMainPageElement extends Components.MainPage, HTMLStencilElement {
    }
    var HTMLMainPageElement: {
        prototype: HTMLMainPageElement;
        new (): HTMLMainPageElement;
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
    interface HTMLSaveButtonElement extends Components.SaveButton, HTMLStencilElement {
    }
    var HTMLSaveButtonElement: {
        prototype: HTMLSaveButtonElement;
        new (): HTMLSaveButtonElement;
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
        "card-icons": HTMLCardIconsElement;
        "card-titles": HTMLCardTitlesElement;
        "fa-icons": HTMLFaIconsElement;
        "header-buttons": HTMLHeaderButtonsElement;
        "image-links": HTMLImageLinksElement;
        "main-card": HTMLMainCardElement;
        "main-header": HTMLMainHeaderElement;
        "main-page": HTMLMainPageElement;
        "my-component": HTMLMyComponentElement;
        "nav-bar": HTMLNavBarElement;
        "round-button": HTMLRoundButtonElement;
        "save-button": HTMLSaveButtonElement;
        "search-bar": HTMLSearchBarElement;
        "search-input": HTMLSearchInputElement;
        "text-links": HTMLTextLinksElement;
    }
}
declare namespace LocalJSX {
    interface CardIcons {
        "like"?: { icon: string; amount: string };
        "seen"?: { icon: string; amount: string };
    }
    interface CardTitles {
        "author"?: string;
        "head"?: string;
    }
    interface FaIcons {
        "icon"?: string;
    }
    interface HeaderButtons {
        "buttons"?: { title: string; icon: string }[];
    }
    interface ImageLinks {
        "alt"?: string;
        "image"?: string;
    }
    interface MainCard {
        "cardicon"?: { like: { icon: string; amount: string }; seen: { icon: string; amount: string } };
        "cardinfo"?: { head: string; author: string };
        "image"?: { source: string; alt: string };
    }
    interface MainHeader {
        "headerButtons"?: { title: string; icon: string }[];
        "logo"?: string;
        "navButtons"?: string[];
        "navLinks"?: string[];
        "searchButtons"?: string[];
    }
    interface MainPage {
        "cards"?: Card[];
        "header"?: Header;
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
    }
    interface NavBar {
        "buttons"?: string[];
        "image"?: { image: string; alt: string };
        "links"?: string[];
        "logo"?: string;
    }
    interface RoundButton {
        "border"?: 'round' | 'square' | 'none';
        "size"?: 'small' | 'large';
        "text"?: string;
        "type"?: 'normal' | 'main';
    }
    interface SaveButton {
    }
    interface SearchBar {
        "buttons"?: string[];
        "onNewvalue"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface SearchInput {
    }
    interface TextLinks {
        "size"?: 'small' | 'medium' | 'large';
        "text"?: string;
        "weight"?: '400' | '700';
    }
    interface IntrinsicElements {
        "card-icons": CardIcons;
        "card-titles": CardTitles;
        "fa-icons": FaIcons;
        "header-buttons": HeaderButtons;
        "image-links": ImageLinks;
        "main-card": MainCard;
        "main-header": MainHeader;
        "main-page": MainPage;
        "my-component": MyComponent;
        "nav-bar": NavBar;
        "round-button": RoundButton;
        "save-button": SaveButton;
        "search-bar": SearchBar;
        "search-input": SearchInput;
        "text-links": TextLinks;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "card-icons": LocalJSX.CardIcons & JSXBase.HTMLAttributes<HTMLCardIconsElement>;
            "card-titles": LocalJSX.CardTitles & JSXBase.HTMLAttributes<HTMLCardTitlesElement>;
            "fa-icons": LocalJSX.FaIcons & JSXBase.HTMLAttributes<HTMLFaIconsElement>;
            "header-buttons": LocalJSX.HeaderButtons & JSXBase.HTMLAttributes<HTMLHeaderButtonsElement>;
            "image-links": LocalJSX.ImageLinks & JSXBase.HTMLAttributes<HTMLImageLinksElement>;
            "main-card": LocalJSX.MainCard & JSXBase.HTMLAttributes<HTMLMainCardElement>;
            "main-header": LocalJSX.MainHeader & JSXBase.HTMLAttributes<HTMLMainHeaderElement>;
            "main-page": LocalJSX.MainPage & JSXBase.HTMLAttributes<HTMLMainPageElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "round-button": LocalJSX.RoundButton & JSXBase.HTMLAttributes<HTMLRoundButtonElement>;
            "save-button": LocalJSX.SaveButton & JSXBase.HTMLAttributes<HTMLSaveButtonElement>;
            "search-bar": LocalJSX.SearchBar & JSXBase.HTMLAttributes<HTMLSearchBarElement>;
            "search-input": LocalJSX.SearchInput & JSXBase.HTMLAttributes<HTMLSearchInputElement>;
            "text-links": LocalJSX.TextLinks & JSXBase.HTMLAttributes<HTMLTextLinksElement>;
        }
    }
}
