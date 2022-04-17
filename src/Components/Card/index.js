import CircleButton from '../CircleButton';
import { CardWrapper } from './style'

const Card = ({ data }) => {
    return ( 
        <CardWrapper img={data.img}>
            <div className="image">
                <section className='icons'>
                    {data.languages.map( (e) => {
                        return <div id={e} key={e} className={`languageIcon ${e}`}></div>
                    } )}
                </section>
            </div>

            <h4 className='title'>{data.title}</h4>
            <p className='date'>{data.date}</p>

            <div className="separator"></div>

            <p className="designBy">Design By: <span className="designer">{data.design}</span></p>
            
            <section className="buttons">
                <CircleButton link={data.repo} icon={'git'}/>
                <CircleButton link={data.link} icon={'play'}/>
            </section>
        </CardWrapper>
     );
}
 
export default Card;