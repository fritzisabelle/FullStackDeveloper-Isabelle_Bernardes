import styled from "styled-components";

export const ModalContainer = styled.div`
position: absolute;
top: 0;
width: 100%;
background-color: rgba(0,0,0, .7);
z-index: 999;
display: flex;
align-items: center;
justify-content: center;
padding-top: 32px;

.content_container{
    background-color: var(--black-13);
    max-width: 100%;
    width: 1080px;
    height: auto;

    padding: 130px 32px 32px;
    display: flex;
    flex-direction: column;
    color: var(--black-1);
    
    .buttonsTop{
        position: relative;
        top: -94px;
        display: flex;
        justify-content: space-between;

        .modalButton {
            display: flex;
            align-items: center;
            background-color: var(--orange);
            gap: 8px;
            outline: none;
            border: none;
            color: var(--black-1);
            width: fit-content;

            .closeModalIcon{
                font-size: 24px;
                color: transparent;
                -webkit-text-stroke-width: .3px;
                -webkit-text-stroke-color: var(--black-1);
            }
        }

        .closeButton{
            justify-content: end;
            padding-right: 13px;
            padding-left: 32px;
            margin-left: -32px;
        }

        .nextButton{
            justify-content: start;
            padding-left: 13px;
            padding-right: 32px;
            margin-right: -32px;
        }
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
                padding: 24px;
            }

        }

    }
}
`