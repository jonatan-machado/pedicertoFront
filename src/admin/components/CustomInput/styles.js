import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 2rem;

  input {
    border: solid 1px #ddd;
    background-color: transparent;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    position: absolute;
    transition: 0.1s;
    outline: none;
    padding: 0 16px;
    color: #000;

    &:not(:placeholder-shown) + label {
      color: #417bd9;
      top: -10px;
      font-size: 13px;
      font-weight: 700;
    }

    &:focus {
      border: solid 2px #417bd9;

      + label {
        color: #417bd9;
        top: -10px;
        font-size: 13px;
        font-weight: 700;
      }
    }
  }

  label {
    z-index: 10px;
    position: absolute;
    top: 12px;
    left: 13px;
    background-color: #fff;
    padding: 2px;
    font-size: 18px;
    color: #aaa;
    pointer-events: none;
    transition: 0.2s;
  }
`;
