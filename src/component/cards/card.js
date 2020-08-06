import React from 'react';
import './card.scss';
import FrontFace from './front-face/front-face';
import BackFace from './back-face/backface.jsx';
import CardBackFace from './back-face/backface-backcard';

const Cards = () => {
    return (
        <div className='cards__container'>
            <div className='cards__container-card'>
                <FrontFace/>
            </div>
            <div className='cards__container-card-rotate'>
                <BackFace />
                <CardBackFace/>
            </div>
        </div>
    )
}

export default Cards;