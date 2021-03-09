import styled from 'styled-components';

export const Main = styled.div`
  background: #fafafa;
  padding-bottom: 35px;

  ul {
    padding-left: 0px;
  }
  @media (max-width: 920px) {
    .img-food {
      padding-left: 0px;
      padding-right: 0px;
    }
    .desc-food {
      padding-left: 5px;
      padding-right: 10px;
    }
  }
`;

export const Container = styled.div`
  margin: 30px auto;
  width: 95%;

  @media (min-width: 920px) {
    margin: 40px auto;
    width: 75%;
  }
`;

export const ListFood = styled.li`
  list-style: none;
  background: #fff;
  margin: 10px 0;

  a {
    &:hover {
      color: #333;
      text-decoration: none;
    }
  }

  @media (min-width: 920px) {
    margin: 20px 0;
  }
`;
export const ImgProducts = styled.img`
  height: 150px;
  width: 250px;
  object-fit: fill;
`;

export const Food = styled.div`
  padding: 2px;
  margin-left: 0px;
  color: #333;

  .title-food {
    font-size: 18px;
    font-weight: 600;
  }

  .price {
    color: green;
    font-size: 14px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media (min-width: 920px) {
    padding: 15px;
    margin-left: 10px;

    .title-food {
      font-size: 22px;
    }
  }
`;
