import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --font-size: 20px;
    --dove: #42567A;
    --white: #FFF;
    --iris: #5D5FEF;
    --blue: #3877EE;
    --fuschia: #EF5DA8;
  }
  
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

    &:active {
      background-color: color-mix(in srgb, var(--dove) 5%, transparent);
    }

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      border-color: var(--dove);
    }
  }
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;padding: 0 80px
  }

  @media screen and (width <= 500px) {
    :root {
      --font-size: 14px;
    }
  }
`;
