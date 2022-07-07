import styled from "styled-components";

export const Wrapper = styled.div`
  input,
  select {
    padding: 10px;
    margin: 0 10px;
    border: 1px solid #ccc;
    font-size: large;
    border-radius: 3px;

    :focus {
      outline: none;
    }
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
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
    background-color: var(--blueThird);
    margin: 20px;
    box-shadow: 3px 3px 3px var(--blueThird);
    :hover {
      opacity: 1;
    }
    :active {
      transform: translateY(5px);
    }
  }
  .statusTable {
    background-color: var(--blueFirstStrong);
    border-radius: 5px;
    padding: 5px;
  }
  table {
    margin: auto;
    text-align: left;
    width: 90%;
    border-spacing: 0 10px;

    th:first-child {
      width: 30%;
    }
    .cur_stn {
      background-color: var(--blueThird);
    }
    .green {
      color: green;
    }
    .red {
      color: red;
    }
    .flicker {
      font-style: italic;
      td {
        padding-left: 20px;
      }
      animation: _flicker 0.5s linear infinite alternate-reverse;
      @keyframes _flicker {
        from {
          background-color: var(--blueThird);
        }
        to {
          background-color: transparent;
        }
      }
    }
  }
`;
