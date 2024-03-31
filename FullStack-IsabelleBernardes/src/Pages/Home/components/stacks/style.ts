import styled from "styled-components";

export const StackSectionStyle = styled.section`
display: flex;
padding: 3em;


.stackSection_column1 {
    z-index: 1;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .stackSection_column1_imgDetail{
        position: relative;
        align-self: flex-start;
        margin-bottom: -140px;
        left: -100px;
        opacity: 30%;
        animation: rotation 15s infinite linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }

    .stackSection_column1_title {
        position: relative;
        margin-left: -75px;
        padding-bottom: 8px;
        font-size: 167px;
        font-weight: 900;
        line-height: 100%;

        color: var(--black-3)
    }

    .stackSection_column1_subtitle{
        color: var(--black-3)
    }
}

.stackSection_column2_stackCloud-container{
    z-index: 0;
}

@media (max-width: 550px){
    flex-direction: column;

    .stackSection_column1 {
        flex-direction: column;
        width: 100%;

        .stackSection_column1_title {
            position: relative;
            margin-left: -45px;
            font-size: 95px;
        }
    }
}

`