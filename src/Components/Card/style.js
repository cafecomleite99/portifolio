import styled from 'styled-components'

export const CardWrapper = styled.div`
    position: relative;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    margin-bottom: 32px;
    width: 362px;
    min-width: 232px;

    box-shadow: 0px 0px 20px rgba(151, 164, 190, 0.1);
    border-radius: 8px;

    & > .image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 232px;
        width: 100%;

        background: url(${props => props.img}) no-repeat;
        background-size: cover;
        background-position: center;
        background-color: aqua;
        border-radius: 8px;
    }

    & > .image > .icons {
        display: flex;
        margin: 8px 4px;
    }

    & > .image > .icons > .languageIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        margin: 0px 6px;
        background-color: white;
        border-radius: 50px;
        border: solid 1px #B7BBC650;
        cursor: pointer;
    }

    & > .title {
        margin: 16px 0 0 0;
        font-weight: 500;
        color: #252B2E;
        font-size: 12pt;
    }

    & > .date {
        margin: 0;
        color: #B7BBC6;
        font-size: 9pt;
        font-weight: 400;
    }

    & > .separator {
        width: 100%;
        height: 1px;
        background: #F5F7FB;
        margin: 16px 0;
    }

    & > .designBy {
        margin: 0;
        font-size: 8pt;
        color: #B7BBC6;
        font-weight: 400;
    }

    & > .designBy > .designer {
        font-size: 10pt;
        font-weight: 500;
    }
        
`