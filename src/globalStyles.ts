import { createGlobalStyle } from 'styled-components';
import bebasNeueRegular from './assets/fonts/bebas-neue_regular.ttf';
import ptSansRegular from './assets/fonts/pt-sans_regular.woff2';
import ptSansBold from './assets/fonts/pt-sans_bold.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'PT Sans';
    src: url(${ptSansRegular})
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PT Sans';
    src: url(${ptSansBold})
    format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bebas Neue';
    src: url(${bebasNeueRegular})
    format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  :root {
    --font-size: 20px;
    --dove: #42567A;
    --white: #FFF;
    --iris: #5D5FEF;
    --blue: #3877EE;
    --fuschia: #EF5DA8;
    --pink: #F178B6;
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
