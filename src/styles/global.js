import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root{
        height: 100vh;
        background: #fafafa;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a, h1, h2, h3, h4, h5, h6, p {
        font-family: 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
    }
`;
