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
      margin: 30px auto;
      width: 95%;

    .btn-edit{
        padding-right: 10px;
        margin-right: -10px;
    }

    .name-client{
        margin-top: 1rem;
        
    }


    @media(min-width: 920px) {
      margin: 40px auto;
      width: 40%;
    }

    ul{
        padding-left: 0;
    }
     
`;

export const ListFood = styled.li`
  list-style: none;
  background: #fff;
  margin: 5px 0 0;

  a{
      &:hover{
          text-decoration: none;
          color: #333;
      }
  }
`

export const DivCheckout = styled.div`
  background: #fff;
  margin: 20px 0;
  padding: 50px 30px;

  h6{
      color: green;
  }
`
export const Hr = styled.div`
    margin: 1.5rem 0;
    border-top: 1px solid rgba(0,0,0,.1);
`
export const ListCheckout = styled.div`
    list-style: none;
`

export const ListTotalCheckout = styled.div`
    background: #fff;
    padding: 0px 30px;

    p{
        margin-bottom: 0px;
    }
`