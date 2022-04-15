import styled from 'styled-components'

export const ProfileWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    color: #272b2c;
    margin: 64px 0;

    & .profile-photo{
        position: relative;

        & img{
            width: 92px;
            border-radius: 50px;
        }

        &::before {
            display: block;
            position: absolute;
            content: "";
            width: 96px;
            height: 96px;
            top: -5px;
            left: -5px;

            border: 3px solid #009ce7;
            border-radius: 50px;
        }

        
        
    }

    & h1{
        margin: 16px 0 0;
        padding: 0;
    }

    & p{
        margin: 0;
        padding: 0;
        color: #009ce7;
    }

    & .medias{
        width: 100%;
        display: flex;
        gap: 16px;
        justify-content: center;
        padding: 8px 0;

        & svg {
            height: 32px;
            filter: saturate(0) contrast(0%);
            cursor: pointer;

            &:hover{
                filter: none;
                opacity: 100%;
            }
        }
    }
`