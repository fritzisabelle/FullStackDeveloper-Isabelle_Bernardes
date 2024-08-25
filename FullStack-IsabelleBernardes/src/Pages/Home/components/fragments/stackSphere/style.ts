import styled from "styled-components";

export const TagCloudStyle = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

.tagcloud {
    display: inline-block;
    top: 0;
    right: -50px;
    font-weight: var(--text-3);
    font-weight: var(--text-weight-Bold);
}

.itemTagCloud{
    color: var(--black-3);
    font-weight: var(--text-weight-Bold);
    text-transform: uppercase;
}

.itemTagCloud:hover {
    color: var(--orange)
}

@media (max-width: 550px){
    position: static;
    
    .tagcloud {
        right: 0;
    }
}
`