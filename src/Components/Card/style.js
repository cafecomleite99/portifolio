import styled from 'styled-components'

import html from '../../Assets/icons/logo-html5.svg'
import css from '../../Assets/icons/logo-css3.svg'
import js from '../../Assets/icons/logo-javascript.svg'
import react from '../../Assets/icons/logo-react.svg'
import style from '../../Assets/icons/styled-logo.png'

export const CardWrapper = styled.div`
    position: relative;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    margin-bottom: 32px;
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
        position: relative;
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

    & > .image > .icons > .HTML {
        background: url(${html}) no-repeat;
        background-color: white;
        background-size: 22px;
        background-position: 50%;

        &:hover {            
            &::before{
                content: 'HTML';
                position: absolute;
                top: -38px;
                height: 16px;
                padding: 6px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 9pt;
                border-radius: 4px;
                background-color: white;
            }
        }

    }

    & > .image > .icons > .CSS {
        background: url(${css}) no-repeat;
        background-color: white;
        background-size: 22px;
        background-position: 50%;

        &:hover {            
            &::before{
                content: 'CSS';
                position: absolute;
                top: -38px;
                height: 16px;
                padding: 6px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 9pt;
                border-radius: 4px;
                background-color: white;
            }
        }

    }

    & > .image > .icons > .JavaScript {
        background: url(${js}) no-repeat;
        background-color: white;
        background-size: 22px;
        background-position: 50%;

        &:hover {            
            &::before{
                content: 'JavaScript';
                position: absolute;
                top: -38px;
                height: 16px;
                padding: 6px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 9pt;
                border-radius: 4px;
                background-color: white;
            }
        }

    }

    & > .image > .icons > .React {
        background: url(${react}) no-repeat;
        background-color: white;
        background-size: 22px;
        background-position: 50%;

        &:hover {            
            &::before{
                content: 'React';
                position: absolute;
                top: -38px;
                height: 16px;
                padding: 6px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 9pt;
                border-radius: 4px;
                background-color: white;
            }
        }

    }

    & > .image > .icons > .Styled {
        background: url(${style}) no-repeat;
        background-color: white;
        background-size: 22px;
        background-position: 50%;

        &:hover {            
            &::before{
                content: 'Styled Components';
                position: absolute;
                top: -38px;
                height: 16px;
                padding: 6px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 9pt;
                border-radius: 4px;
                background-color: white;
            }
        }

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