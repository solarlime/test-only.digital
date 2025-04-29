import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :focus-visible {
    outline: var(--iris) solid 2px;
    outline-offset: 1px;
  }
  
  body {
    padding: 0;
    margin: 0;
    color: var(--dove);
    font-family: 'PT Sans', Helvetica, sans-serif;
    font-weight: normal;
    font-size: var(--font-size);
    line-height: 1.5;
  }
  
  button {
    padding: 0;
    margin: 0;
    border: 1px solid color-mix(in srgb, var(--dove) 50%, transparent);
    background: transparent;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    &:not(:disabled):active {
      background-color: color-mix(in srgb, var(--dove) 5%, transparent);
    }

    &:not(:disabled):hover {
      border-color: var(--dove);
    }
  }
  
  html {
    overflow-x: hidden;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 var(--padding-outer);
  }

  @media screen and (max-width: 1000px) {
    #root {
      padding: 0;
    }
  }
`;
