import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialised;
    font-size: 100%;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button, a {
    cursor: pointer;
  }
`;
