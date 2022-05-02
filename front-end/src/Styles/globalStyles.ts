import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-900: #000000;

    --green: #BAE468;
    --ligth-green: #A9C58E;
    --dark-green: #254C12;

    --dark-blue: #181ec4;
    --blue: #088CE8;
    --ligth-blue: #9DD7FF;

    --pink: #FE7D86;
    --ligth-pink: #FFC8C8;

    --red: #f20f4b;

    --white: #FFFFFF;

    --orange: #cc6a02;

    --purple: #BF59FD;

    --dark-gray: #767676;
    --ligth-gray: #ACACAC;
    --toastify-color-error: #BF59FD;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar {
        width: 0.5vh;
        height: 0.5vh;
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--orange);
    }
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: var(--dark-500);
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active
  {
    -webkit-animation-delay: 1s;
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
    box-shadow: 0 0 0 30px #020202 inset ;
  }
  input:-webkit-autofill
  {
    -webkit-text-fill-color: #FFFFFF !important;
  }
`;

export default GlobalStyle;
