import styled from "styled-components";

export const RecentWorkStyle = styled.section`
position: relative;
z-index: 7;
color: var(--black-3);
padding: 6em 0px;


h2 {
  font-size: var(--title-h2);
  white-space: nowrap;

  color: transparent;
    -webkit-text-stroke-width: .3px;
    -webkit-text-stroke-color: var(--black-1);
}

h3 {
  font-size: var(--title-h3);
  white-space: nowrap;
  overflow-x: hidden;

  span {
    color: transparent;
    -webkit-text-stroke-width: .3px;
    -webkit-text-stroke-color: var(--black-1);
  }
}

.jobCards-container {
display: flex;
gap: 16px;
max-width: 100%;
padding: 0px 2em;

.jobCard {
  width: 100%
}

.jobCard_cover {
    width: 100%;
    height: 535px;
    object-fit: cover;
  }

.jobCard_ProjectCategory_Tag {
  width: 100%;
  background: red;
  text-align: center;
  padding: 0.15em;
}

.jobCard_details {
  display: flex;
  justify-content: space-between;
  padding: 1em 0px;

  h5 {
    font-size: 1em;
  }

  p {
    font-size: 0.8em;
  }
}

.jobCard_details_button{
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  padding: .5em;
}

.jobCard_details_button:hover{
  background: var(--orange);
  padding: .5em;
}

    
  }

  .button-container{
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 4em;


      .button-seeMore{
        display: flex;
        align-items: center;
        gap: 6em;
        padding: .5em 1em;

        color: var(--black-3);
        background-color: transparent;
        border: 1px solid var(--black-3);
        border-radius: 50px;
    }
    }
`