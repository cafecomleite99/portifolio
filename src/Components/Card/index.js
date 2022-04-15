import PlayButton from '../PlayButton';
import { CardWrapper } from './style'

const Card = ({ data }) => {
    return ( 
        <CardWrapper img={data.img}>
            <div className="image">
                <section className='icons'>
                    {data.languages.map( (e) => {
                        return <div id={e} className={`languageIcon ${e}`}></div>
                    } )}
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