import styled from 'styled-components'

export const PlayButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    background-color: #009CE7;
    border-radius: 50px;
    box-shadow: 0 0 20px #97A4BE10;
    
    position: absolute;
    bottom: -23px;
    right: 23px;
    cursor: pointer;
    
    &:hover {
        box-shadow: 0 0 20px #97A4BE80;
    }
`