import styled from "styled-components";

export const Wrapper = styled.div``;

export const InputContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .stationContainer {
    input {
      padding: 10px;
      margin: 0 10px;
      border: 1px solid #ccc;
      font-size: large;
      border-radius: 3px;

      :focus {
        outline: none;
      }
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
  button {
    border-radius: 3px;
    padding: 10px 10px;
    margin: 5px 10px;
    border: none;
    font-size: large;
    opacity: 0.8;
    cursor: pointer;
  }
  button:hover {
    opacity: 1;
  }
  .submit {
    background-color: var(--blueThird);
    margin: 20px;
    box-shadow: 3px 3px 3px var(--blueThird);
    :active {
      transform: translateY(5px);
    }
  }
  .reverse {
    background-color: var(--blueSecond);
  }
`;

export const ResultContainer = styled.div`
  overflow: auto;
  table {
    margin: auto;
    padding: 10px;
    border-spacing: 0 10px;

    tr:nth-child(even) {
      background-color: var(--blueFirstStrong);
    }
    td {
      padding: 0 5px;
    }

    @media screen and (min-width: 800px) {
      font-size: large;
    }
  }
`;
