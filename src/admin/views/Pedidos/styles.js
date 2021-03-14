import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  //background-color: red;
  justify-content: space-between;
`;

export const Column = styled.div`
  width: 240px;
  height: 600px;

  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  header {
    border-bottom: solid 1px grey;
    position: sticky;
    top: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    h6 {
      font-weight: 700;
    }
  }
`;
