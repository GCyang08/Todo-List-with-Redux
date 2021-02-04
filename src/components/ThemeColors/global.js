import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-image: url('${({ theme }) => theme.bgImage}');
    background-repeat: no-repeat;
    background-size: 100% 315px;
    background-color: ${({ theme }) => theme.body};
    transition: background 0.5s linear;
  }
  input {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.section};
    transition: all 0.25s linear;
  }
  section {
    background-color: ${({ theme }) => theme.section};
    color: ${({ theme }) => theme.text};
    border-radius: 3px;
    transition: all 0.25s linear;
  }
  ul {
    border-bottom: 1px solid ${({ theme }) => theme.ulBorderBottom}; 
  }
  span{
    color: ${({ theme }) => theme.spanText}; 
  }
  span:hover{
   color: ${({ theme }) => theme.spanOnHover};
  }
  @media (min-width: 280px) and (max-width: 800px) {

  }
  `;
