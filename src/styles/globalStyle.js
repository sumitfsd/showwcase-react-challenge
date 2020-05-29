import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  };

  html {
    box-sizing: border-box;
  };
  *, *:before, *:after {
    box-sizing: inherit;
  };

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    &.modal-open {
      overflow: hidden;
    }
  };

  h1,
  h3,
  h4 {
    margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  hr {
    height: 1px;
    width: 100%;
    background-color: $black;
    opacity: 0.1;
  }

  input[type=text],
  input[type=password],
  input[type=date],
  input[type=number],
  textarea,
  select {
    padding: calc(${theme.sizingUnit} / 2);
    font-size: calc(${theme.sizingUnit} * 1.125);
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: ${theme.borderRadius};
    outline: 0 none;
    height: calc(${theme.sizingUnit} * 3);
    line-height: calc(${theme.sizingUnit} * 3);
    background-color: ${theme.backgroundDarken};

    &:focus {
      border-color: ${theme.main};
    }
  }

  a {
    color: ${theme.text};
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;

    &:focus {
      outline: none;
      border: none;
    }
  }
`
export default GlobalStyle
