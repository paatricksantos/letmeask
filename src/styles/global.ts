import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #f8f8f8;
    color: '#29292e';
  }

  ul, li{
    list-style: none;
  }

  body, input, button, textarea{
    font: 400 16px 'Roboto',sans-serif;
  }
`;
