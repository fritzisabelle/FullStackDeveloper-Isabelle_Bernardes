import { styled } from "styled-components";

export const FirstSectionTemplate = styled.section`
  width: 100vw;
  height: 70vh;
  padding: 0px 130px;
  display: flex;
  align-items: center;
  justify-content: left;

  background-color: #cdcdcd;

  .topInfo_project_button {
    max-width: 30%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    button {
      color: var(--gray-bg);
      font-size: 16px;
      width: fit-content;
      padding: 10px 32px;
      border: none;
      border-radius: 50px;
      background-color: var(--orange);
    }
  }

  .topInfo_project_tags {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .topInfo_project_description {
    display: flex;
    flex-direction: column;
    gap: 4px;

    p {
      font-size: 16px;
    }
  }

  .project-tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
      font-size: 16px;
      display: flex;
      padding: 8px 16px;
      border: 1px solid var(--gray-bg);
      border-radius: 50px;
    }
  }

  .topInformation_project {
    small {
      font-size: 14px;
    }

    h1 {
      font-size: 80px;
      line-height: 1em;
    }
  }
`;
