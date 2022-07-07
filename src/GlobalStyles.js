import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --blueFirst : #E8F9FD;
    --blueFirstStrong : #b2ebf2;
    --blueSecond : #79DAE8;
    --blueSecondStrong : #50cdff;
    --blueThird : #1bbeff;
    --blueForth : #2155CD;
    --darkGrey : #555;
    --medGrey : #999;
    --lightGrey : #ccc;
  }
  html, body, body > #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  #root {
    background-color: var(--blueFirst);
    overflow: auto;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
