import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 

*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #434455;
    background: #fff;
    letter-spacing: 0.02em;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
    margin: 0 auto;
    position: relative;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
}

button, input {
    cursor: pointer;
    font-family: inherit;
}
`;

export default GlobalStyles;