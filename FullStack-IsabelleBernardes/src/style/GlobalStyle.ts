import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        list-style: none;
        text-decoration: none;
        font-family: forma-djr-banner, sans-serif;
    }

    :root {
        --gray-bg: #F5F5F5;
        --gray-border: #f1f1f1;
        --orange: #E75A35;
        --black-13: #131313;
        --black-12: #242424;
    }

    body {
        display: flex;
        justify-content: center;
        background-color: var(--gray-bg);
    }
    
    .App{
        margin-top: 100px;
        width: 100vw;
        min-height: 100%;
        align-items: center;
        justify-content: center;
        background-color: var(--gray-bg);
    }

    

    h1 {
        color: red;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 425px) {
        :root {
            --title-1: 1.56rem;
        }
    }

    @media (min-width: 1024px) {
        .App{
            width: 100%;
            min-height: 100%;
        }
    }
`;
