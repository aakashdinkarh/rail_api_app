import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--blueSecond);
  font-family: system-ui;
  font-weight: 500;

  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      a {
        display: block;
        padding: 10px 15px;
        text-decoration: none;
        :link,
        :visited {
          color: black;
        }
      }
      :hover {
        background-color: var(--blueSecondStrong);
      }
      .active {
        background-color: var(--blueThird);
      }
    }
  }
`;
