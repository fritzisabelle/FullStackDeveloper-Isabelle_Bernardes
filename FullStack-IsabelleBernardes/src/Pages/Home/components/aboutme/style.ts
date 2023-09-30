import styled from "styled-components";

export const AboutMeSectionContainer = styled.section`
.softSkills-cards-container{
    width: fit-content;
    display: flex;
    gap: 1em;

    .softSkill-card{
        width: 19em;
        height: 17em;
        background-color: transparent;
        border-radius: 1.25em;
        border: 1px solid var(--black-3);
        padding: 1.25em 1.5em;

        .softSkill-card_header {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .softSkill-card_title{
                color: red;
            }

            .softSkill-card_number{
                font-weight: 400;
            }
        }

        p {
            font-size: 1em;
        }
    }
}
`