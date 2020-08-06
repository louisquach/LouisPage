import React from 'react';
import './front-face.scss';
import CardRotate from '../../rotate/rotate.component';

const FrontFace = () => {
    return (
        <div className='card__frontface'>
            <h1 className='card__frontface-figure'>
                Hi there !  
                <span className='card__frontface-intro'>
                 I am Louis,
                </span>
                <span className='card__frontface-intro'>
                 a web developer
                </span>
            </h1>
            <div className='card__frontface-rotate'>
                <CardRotate/>
            </div>
        </div>
    )
}
export default FrontFace;