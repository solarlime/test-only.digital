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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 80px;
  }

  @media screen and (max-width: 1000px) {
    :root {
      --font-size: 16px;
    }
    
    #root {
      padding: 0;
    }
  }

  @media screen and (max-width: 500px) {
    :root {
      --font-size: 14px;
    }
  }
`;
