import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #fff, #f2f2f2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form{
    display:flex;
    flex-direction: column;
    margin-top: 30px;

    input{
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #999;
      margin: 0 0 10px;

      &::placeholder{
        color: #999;
      }
    }

    span{
      color: #f64c75;
      align-self: flex-start;
    }

    button{
      margin: 5px 0 0;
      height: 40px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
    }

    a{
      color: #fff;
      font-size: 16px;
      text-transform: uppercase;
      
    }
  }
`;