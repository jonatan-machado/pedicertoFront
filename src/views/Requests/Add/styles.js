import styled from 'styled-components';

export const Main = styled.div`
  background: #fafafa;
 
  .div-btn{
    a{
        border-radius: 0px;
        text-transform: uppercase;
    }
  }

    .btn-circle{
        border-radius: 50px;
        font-size: 22px;
        font-weight: 700;
        outline: none;
        border: none;
        float: right;
        cursor: pointer;
    }
    .btn-add{
        display: flex;
        justify-content: flex-end;
    }
    .btn-add button{
        margin-left: 10px;
    }
    .btn-circle.mais{
        background: #38c357;
        color: #fff;
        padding: 5px 15px;
    }

    .btn-circle.menos{
        background: #e32134;
        color: #fff;
        padding: 5px 18px;
    }
`;

export const Container = styled.div`
      margin: 30px auto;
      width: 95%;
    
    @media(min-width: 920px) {
      margin: 40px auto;
      width: 75%;
    }

    ul{
        padding-left: 0;
    }
     
`;

export const ListFood = styled.li`
  list-style: none;
  background: #fff;
  margin: 20px 0;

  a{
      &:hover{
          text-decoration: none;
          color: #333;
      }
  }
`

export const Adicionals = styled.div`
  background: #fff;
  margin: 20px 0;
  padding: 30px;

  @media(max-width: 920px) {
    padding: 20px;
  }
  h6{
      color: green;
  }
`
export const Hr = styled.div`
    margin: 1.5rem 0;
    border-top: 1px solid rgba(0,0,0,.1);
`
export const ListAdicionals = styled.div`
    list-style: none;
`

export const ListTotalAdicionals = styled.div`
    background: #fff;
    margin: 20px 0;
    padding: 0px 30px;
`

export const ImgProducts = styled.img`
  height: 100%;
  width: 100%;
`;

export const Food = styled.div`
    padding: 15px;
    margin-left: 10px;
    color: #333;
  
  .title-food{
    font-size: 22px;
    font-weight: 600;
  }

  .price{
    color: green;
    font-size: 18px;
    font-weight: 600;
  }

  p{
    margin-bottom: 5px;
  }
`
