import styled from 'styled-components';

export const Main = styled.div`
  background: #fafafa;
`;

export const Container = styled.div`
  background: #fafafa;
  width: 95%;

  @media(min-width: 920px) {
    width: 50%;
    padding: 40px 0;
  }
`;

export const MenuInicial = styled.div`
  margin: 0 auto;
  width: 95%;
  
  @media(min-width: 920px) {
    padding: 40px 0;
    width: 50%;
  }
`

export const menu = styled.div`
  
`

export const ImgProducts = styled.img`
  height: 100%;
  
  @media(min-width: 920px) {
    height: 300px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;  
  width: auto;
  height: auto;

  @media(min-width: 920px) {
    height: 230px;
    min-height: 230px;
    max-height: 230px;
  }
  

  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 8%);
  margin: 20px auto;

  img{
    width: auto;
    height: auto;
    min-height: 110px;

  @media(min-width: 920px) {
    height: 210px;
    }
  }
  h6{
    text-align: center;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 0;
  }
`
export const TitleCard = styled.div`
  width: 100%;
  background: #333;

  h6{

  }
`

export const Menu = styled.div`

`