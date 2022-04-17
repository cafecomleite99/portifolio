import styled from 'styled-components'

export const PlayButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    background-color: ${props => props.icons === 'play' ? '#009CE7' : '#fff'};
    border-radius: 50px;
    box-shadow: 0 0 20px #97A4BE10;
    border: 1px solid #00000010;
    
    cursor: pointer;
    
    &:hover {
        box-shadow: 0 0 20px #97A4BE80;
    }

    & > .playIcon{
        display: ${props => props.icons === 'play' ? 'block' : 'none'};
    }

    & > .gitIcon{
        display: ${props => props.icons === 'git' ? 'block' : 'none'};
        padding: 8px;
    }
`