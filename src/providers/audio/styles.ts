import { css } from 'lit';

export const audioElementStyles = css`
  :host {
    display: block;
    contain: content;
  }

  :host([hidden]) {
    display: none;
  }

  audio {
    display: inline-block;
    border-radius: inherit;
    vertical-align: middle;
    outline: 0;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
  }

  audio:not([width]) {
    width: 100%;
  }
`;
