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

        
        & .cardContainer{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(296px, 1fr));
            gap: 16px 32px;
            padding: 32px;
        }
    }

`