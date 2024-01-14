import styled from "styled-components";

export const Template = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.content_container{
    width: 1180px;
    max-width: 100%;
    min-height: 100vh;
    padding: 130px 32px 32px;
    display: flex;
    flex-direction: column;
    color: var(--black-1);
}

h1 {
        font-size: 40px;
    }

.jobsListContainer {
    display: flex;
    flex-direction: column;
    gap:16px;

    .filterContainer{
        display: flex;
        align-items: center;
        gap: 24px;

        .filterOptions{
            width: max-content;
            white-space: nowrap;
            overflow-x: auto;
            display: flex;
            gap: 8px;
            cursor: grab;
            user-select: none;

            &::-webkit-scrollbar {
                display: none;
            }

            span {
                border: 1px solid var(--black-1);
                padding: 8px 16px;
                border-radius: 32px;
            }

            span:hover {
                color: var(--orange);
                border-color: var(--orange);
                transition-duration: 200ms;
            }
        }
    }

    .jobsMosaicContainer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;

        .jobCard {
            height: 300px;
            background-size: cover;
            color: white;
            background-image: url("./src/assets/imgs/project-cover1.jpg");
            background-repeat: no-repeat;
            object-fit: cover;

            .JobCardHoverInfo{
                color: transparent;
                background-color: transparent;

                button {
                    display: none;
                }
            }   
        }

        .jobCard:hover{
            .JobCardHoverInfo{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                color: white;
                width: 100%;
                height: 100%;
                padding: 40px 32px;
                background-color: rgba(0,0,0,0.9);
                transform: translateY(1);
                transition-duration: .2s;

                div {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            }

            button{
                display: block;
            }
        }

    }
}
`