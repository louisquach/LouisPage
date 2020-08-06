import React from 'react';
import './progress.component.scss';

const ProgressBar = (props) => {
    return (
            <div className='card__progress'>
                <label for='meter' className='card__progress-label'><b>{props.title}</b></label>
                <div id="meter">
                    <span className='card__progress-bar'></span>
                </div>
            </div>
    )
}


export default ProgressBar;