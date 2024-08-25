import styled, { css } from "styled-components";

interface IButtonProps {
    buttonStyle: "Icon" | "Icon&Text" | "CaseButton"
}

export const Button = styled.button<IButtonProps>`
display: flex;
align-items: center;
gap: 16px;
width: fit-content;
gap: auto;
background: transparent;
padding: .5em;
border: none;
outline: none;
position: relative;
/* border-radius: 32px; */

font-weight: 500;
font-size: 1em;
font-family: Forma DJR Banner;
font-style: normal;


&::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--orange);
    z-index: -1;
    /* border-radius: 32px; */
    
}

&:hover::before,
&:focus::before{
    transition: transform 300ms ease-in-out;
    transform: scaleX(1);
    /* border-radius: 32px; */
}

img {
    height: 20px;
    width: auto;
}

${({ buttonStyle }) => {
        switch (buttonStyle) {
            case "Icon":
                return css`
                color: var(--black-1);
                    &::before {
                        transform: scaleY(0);
                        transform-origin: bottom;
                    }
                `;
            case "Icon&Text":
                return css`
                    color: var(--black-1);
                    align-items: center;
                    padding: 8px 24px;
                    min-width: 260px;
                    justify-content: space-between;
                    border: 1px solid var(--black-4);
                    border-radius: 32px;

                    &::before {
                        border-radius: 32px;
                        transform-origin: left;
                        transform: scaleX(0);
                    }
                `;
            case "CaseButton":
                return css`
                        padding: 8px 24px;
                        justify-content: space-between;
                        background: var(--orange);
                        border-radius: 32px;
                        color: var(--black-13);

                        &:hover {
                            transform: translateY(-8px);
                            transition: 200ms, border-radius 200ms;
                            border-radius: 32px;
                        }

                        &::before {
                            border-radius: 32px;
                        }
                    `;

        }
    }}


`