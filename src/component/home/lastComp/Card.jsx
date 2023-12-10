import Image from 'next/image';
import './lastComp.css';

const Cards = ({CardText, CardName, CardRink, img}) => {
    return (
        <>
            <div className="card">
                <div className="leftCard">
                    <div className="imgBack"></div>
                    <Image src={img} width={300} height={300} alt='peopleImg' />
                </div>
                <div className="rightCard">
                    <div className="comma"><QuoteIcon /></div>
                    <p className='CardText'>{CardText}</p>
                    <p className='CardName'>{CardName}</p>
                    <p className='CardRink'>{CardRink}</p>
                </div>
            </div>
        </>
    )
}

export default Cards;


const QuoteIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="61.158" height="51.075" viewBox="0 0 61.158 51.075">
            <defs>
                <linearGradient id="linear-gradient1" x1="0.5" x2="0.5" y2="1">
                    <stop offset="0" stopColor="#64F4AB"></stop>
                    <stop offset="1" stopColor="var(--e-global-color-c51b028)"></stop>
                </linearGradient>
            </defs>
            <g id="quote_-_icon" data-name="quote - icon" transform="translate(0 -7.858)">
                <g id="Group_107" data-name="Group 107" transform="translate(0 7.858)">
                    <path id="Path_38" d="M19.574,31a16.2,16.2,0,0,0-4.478-.654A14.072,14.072,0,0,0,9.482,31.5c1.411-5.167,4.8-14.082,11.556-15.086a1.6,1.6,0,0,0,1.309-1.154l1.476-5.28A1.6,1.6,0,0,0,22.5,7.961a11.212,11.212,0,0,0-1.51-.1c-8.107,0-16.136,8.462-19.524,20.578C-.527,35.544-1.11,46.23,3.789,52.957c2.741,3.764,6.741,5.774,11.887,5.975h.063A14.228,14.228,0,0,0,19.574,31Z" transform="translate(0 -7.858)" fill="#64F4AB"></path>
                    <path id="Path_39" d="M76.754,37.724A14.262,14.262,0,0,0,68.2,31a16.2,16.2,0,0,0-4.477-.654,14.075,14.075,0,0,0-5.615,1.15c1.411-5.167,4.8-14.082,11.556-15.086a1.606,1.606,0,0,0,1.309-1.154l1.476-5.28a1.6,1.6,0,0,0-1.327-2.021,11.2,11.2,0,0,0-1.51-.1c-8.107,0-16.136,8.462-19.524,20.578C48.1,35.544,47.516,46.23,52.416,52.958c2.741,3.763,6.741,5.774,11.886,5.974h.064A14.228,14.228,0,0,0,76.754,37.724Z" transform="translate(-17.431 -7.858)" fill="#64F4AB"></path>
                </g>
            </g>
        </svg>
    );
};



