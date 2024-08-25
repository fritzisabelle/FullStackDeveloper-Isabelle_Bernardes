import styled, { css } from "styled-components";

interface IButtonProps {
    buttonStyle: "Icon" | "Icon&Text"
}

export const Button = styled.button<IButtonProps>`
display: flex;
align-items: center;
width: fit-content;
gap: auto;
border: none;
outline: none;
position: relative;
font-weight: 500;
font-size: 1em;
font-family: Forma DJR Banner;
font-style: normal;
color: var(--black-1);
border-radius: 8px;

img {
    height: 20px;
    width: auto;
}

${({ buttonStyle }) => {
        switch (buttonStyle) {
            case "Icon":
                return css`
                   padding: .5em;
                `;
            case "Icon&Text":
                return css`
                    padding: 8px 16px;
                    min-width: 260px;
                    gap: auto;
                    justify-content: space-between;
                    background: var(--orange);
                    border-radius: 32px;
                `;
        }
    }}


`