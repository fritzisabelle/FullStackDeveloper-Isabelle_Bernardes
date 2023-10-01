import styled from "styled-components";

export const ContactSectionStyle = styled.section`
overflow-x: hidden;
display: flex;
flex-direction: column;
align-items: center;

h2 {
    white-space: nowrap;
    font-size: var(--title-h2);
    padding-bottom: 4rem;
    color: var(--black-3);
}

.contactButtons-container{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: fit-content;
    padding-bottom: 4rem;

    div {
        min-width: 350px;

        h3 {
        letter-spacing: 1px;
        color: var(--black-3);
        font-size: 1.4rem;
        text-transform: uppercase;
        padding-bottom: 1em;
        }

        button {
            width: 100%;
            color: var(--black-3);
            padding: .5rem 1.5rem;
            background: none;
            border: 1px solid var(--black-3);
            border-radius: 1rem;
        }
    }
}
`