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
        letter-spacing: 1px;
    }

    :root {
        --gray-bg: #F5F5F5;
        --gray-border: #f1f1f1;
        --orange: #E75A35;
        --pink: #E064CC;
        --blue: #2100EF;
        --green: #309D09;
        --black-1: #F5F5F5;
        --black-2: #EEEEEE;
        --black-3: #DCDCDC;
        --black-4: #CDCDCD;
        --black-8: #6F6F6F;
        --black-10: #484848;
        --black-12: #242424;
        --black-13: #131313;

        --title-h1: 10em;
        --title-h2: 8em;
        --title-h3: 3em;
        --title-h4: 1em;
        --title-h5: 1em;

        --text-1: 1em;
        --text-2: 1.5em;
        --text-3: 2em;

        --text-weight-Black: 900; 
        --text-weight-Bold: 700;
        --text-weight-Regular: 500; 
        --text-weight-Light: 300; 
    }

    body {
        max-width: 100vw;
        background-color: var(--black-13);
        overflow-x: hidden;  
    }

    body::-webkit-scrollbar-track {
        background-color: transparent;
    }

    body::-webkit-scrollbar {
        width: 6px;
    }

    body::-webkit-scrollbar-thumb {
        background-color:var(--black-8);
        border-radius: 6px; 
    }
    
    .App{
        max-width: 100%;
        align-items: center;
        justify-content: center;

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
