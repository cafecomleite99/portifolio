import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`

    body {
        font-family: 'Poppins', sans-serif;;
        background-color: #F5F7FB;
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    .App {
        display: flex;
        max-width: 1440px;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 16px;
        padding: 32px;
    }

`