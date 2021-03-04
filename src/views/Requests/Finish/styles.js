import styled from 'styled-components';

export const Main = styled.div`
  background: #fafafa;

  .div-btn{
    a{
        border-radius: 0px;
        text-transform: uppercase;
    }
`;

export const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px auto;
      width: 95%;


    .name-client{
        margin: 1rem 0;
        
    }

    @media(min-width: 920px) {
      margin: 40px auto;
      width: 40%;
    }   
`;