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
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 32px;

        
        & .cardContainer{
            width: 100%;
            display: flex;
            flex: none;
            flex-wrap: wrap;
            gap: 16px;
            justify-content: center;
        }
    }

`