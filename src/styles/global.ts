// src/styles/global.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: 16px;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    transition: background-color ${({ theme }) => theme.transitions.normal};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.tight};
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, textarea, select {
    font-family: inherit;
  }
  
  code {
    font-family: ${({ theme }) => theme.fonts.code};
  }
  
  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
  
  /* Para dispositivos móveis */
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    :root {
      font-size: 14px;
    }
  }
`;
