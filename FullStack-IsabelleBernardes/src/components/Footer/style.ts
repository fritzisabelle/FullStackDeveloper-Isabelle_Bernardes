import styled from "styled-components";

export const FooterStyle = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

gap: 4rem;

padding-bottom: 4rem;
padding-top: 5rem;

small {
   font-size: var(--text-1) ;
   color: var(--black-8);
}

.anchor-backToTop-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        
        img {
            transform: rotate(180deg);
            opacity: 30%;
        }
    }

    button {
        background: none;
        font-size: 3rem;
        font-weight: var(--text-weight-Bold);
        color: var(--black-3);
        border: none;
    }

    button:hover {
        transition: all .1s ease-in;
        transform: scale(1.1);
    }
}
`