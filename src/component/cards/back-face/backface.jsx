import React from 'react';
import './backface.scss';
import ProgressBar from './progressbar/progress.component';

const BackFace = () => {
    return (
        <div className='card__backface'>
            <h2 className='card__backface-ability'>Ability</h2>
            <ProgressBar title={'hard-working'}/>
            <ProgressBar title={'teamwork'}/>
            <ProgressBar title={'reliable'}/>
            <ProgressBar title={'work-independently'}/>
            <ProgressBar title={'willing to learn'}/>
        </div>
    )
}

export default BackFace;