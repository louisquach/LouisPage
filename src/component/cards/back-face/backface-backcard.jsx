import React from 'react';
import './backface-backcard.scss';

const CardBackFace = () => {
    return (
        <div className='card__back-backface'>
            <div className='card__back-backface-container'>
            <h4 className='backface-certificates'><span className='certificate'>certificates</span></h4>
                <span className='backface-items'><span>&#10032;</span> web development bootcamp</span>
                <span className='backface-items'><span>&#10032;</span> react, redux development</span>
                <span className='backface-items'><span>&#10032;</span> advanced css and sass</span>
                <span className='backface-items'><span>&#10032;</span> web developer roadmap</span>
            </div>
        </div>
    )
}

export default CardBackFace;