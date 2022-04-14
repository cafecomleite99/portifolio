import PlayButton from '../PlayButton';
import { CardWrapper } from './style'

const Card = ({ data }) => {
    return ( 
        <CardWrapper img={data.img}>
            <div className="image">
                <section className='icons'>
                    <div className="languageIcon">
                        <svg width="16" height="16" viewBox="0 0 12 12">
                        <path d="M0.857178 0L1.79307 10.8003L5.99387 12L10.2054 10.7987L11.1429 0H0.857178ZM9.10718 3.53571H4.17861L4.28575 4.90179H9.00003L8.63816 8.95688L6.00003 9.70929L3.35682 8.95929L3.17521 6.88393H4.46789L4.5595 7.93634L6.00003 8.33223L7.43093 7.93259L7.58039 6.21429H3.10718L2.76995 2.20741H9.21968L9.10718 3.53571Z" fill="#E86229"/>
                        </svg>
                    </div>

                    <div className="languageIcon">
                        <svg width="16" height="16" viewBox="0 0 12 12">
                        <path d="M0.857178 0L1.79468 10.8005L5.99387 12L10.2054 10.7987L11.1429 0H0.857178ZM8.64325 8.97054L6.00191 9.72321L3.36459 8.96679L3.18378 6.88393H4.47646L4.56834 7.94357L6.00379 8.34964L6.00727 8.35714L7.4395 7.95937L7.59057 6.24107H4.58039L4.47325 4.90179H7.70495L7.82146 3.53571H2.89289L2.78575 2.22321H9.22986L8.64325 8.97054Z" fill="#009CE7"/>
                        </svg>
                    </div>

                    <div className="languageIcon">
                        <svg width="16" height="16" viewBox="0 0 12 12">
                        <path d="M0 0V12H12V0H0ZM6.42857 9.32143C6.42857 10.4896 5.73857 11.059 4.73973 11.059C3.83759 11.059 3.31393 10.5919 3.04821 10.028L3.96643 9.47223C4.14348 9.78643 4.27795 10.0521 4.66446 10.0521C4.98589 10.0521 5.25 9.90723 5.25 9.34339V5.57143H6.42857V9.32143ZM9.08973 11.0322C8.04268 11.0322 7.36607 10.5597 7.0358 9.90723L7.95536 9.375C8.19643 9.76982 8.51116 10.0329 9.06696 10.0329C9.53411 10.0329 9.80545 9.82607 9.80545 9.50384C9.80545 9.11732 9.52607 8.98045 9.01045 8.75384L8.72866 8.63277C7.91491 8.2867 7.37545 7.8517 7.37545 6.93321C7.37545 6.08759 8.01964 5.46991 9.02652 5.46991C9.74357 5.46991 10.2587 5.69277 10.6296 6.34527L9.75 6.91071C9.55661 6.56438 9.34821 6.42857 9.02518 6.42857C8.69491 6.42857 8.48545 6.63804 8.48545 6.91071C8.48545 7.24902 8.69491 7.38589 9.17812 7.59536L9.45991 7.71616C10.4186 8.12705 10.9583 8.54652 10.9583 9.4883C10.9586 10.5035 10.1612 11.0322 9.08973 11.0322Z" fill="#FFCA3E"/>
                        </svg>
                    </div>
                </section>
            </div>

            <h4 className='title'>{data.title}</h4>
            <p className='date'>{data.date}</p>

            <div className="separator"></div>

            <p className="designBy">Design By: <span className="designer">{data.design}</span></p>

            <PlayButton link={data.link}/>
        </CardWrapper>
     );
}
 
export default Card;