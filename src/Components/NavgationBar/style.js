import styled from 'styled-components'

export const NavBarWrapper = styled.div`

    display: flex;
    width: 100%;
    padding: 0 24px;
    margin-bottom: 32px;
    align-items: center;
    justify-content: space-between;

    background-color: white;
    box-shadow: 0px 0px 20px rgba(151, 164, 190, 0.1);
    border-radius: 8px;

    & > svg {
        width: 24px;
        fill: #252B2E;
        margin-right: 24px;
        cursor: pointer;
    }

    & > div {
        display: flex;
    }

    & > div > .itens {
        margin: 0;
        padding: 24px 0;
        margin-left: 24px;
        border-bottom: solid 3px transparent;
        cursor: pointer;
        font-size: 12pt;
        color: #252B2E;
    }


    & > div > .active {
        border-bottom: solid 3px #009CE7;
    }

    & > .searchBar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        border-radius: 50px;
        background-color: #F1F2F6;
    }

    & > .searchBar > input{
        background-color: transparent;
        border: none;
        color: #75788A;
    }

    & > .searchBar > input:focus{
        outline: none;
    }

    & > .searchBar > svg{
        margin-right: 8px;
        fill: #75788A;
    }

    @media (max-width: 560px) {

        & > .searchBar {
            padding: 12px;
        }

        & > .searchBar > svg {
            margin: 0;
        }
        
        & > .searchBar > input {
            display: none;
        }
        
    }
`