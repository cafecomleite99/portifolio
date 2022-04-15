import styled from 'styled-components'

export const SearchBarWrapper = styled.div`

    & > .searchBar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        border-radius: 50px;
        background-color: #F1F2F6;
        
        & input{
            background-color: transparent;
            border: none;
            color: #75788A;
        }

        & input:focus{
            outline: none;
        }
        
        & svg{
            margin-right: 8px;
            fill: #75788A;
        }
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