import React from 'react';
import './introduce.scss'

const Introduce = ({displayIntro}) => {
    return (
        <div className='second-slide' style={{display: displayIntro}}>
            <figure className='second-slide-content'>
                <blockquote className='second-slide-quote'>&#10077;The journey of a thousand miles begins with a single step&#10078;</blockquote>
                <figcaption className='reference'>&#8213; Lao Tzu &#8213;</figcaption>
            </figure>
        </div>
    )
}

export default Introduce;