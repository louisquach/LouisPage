import React from 'react';
import './about.scss';
import Cards from '../../cards/card';


const AboutScreen = ({displayStyle}) => {
    return (
        <div className='about' style={{display: displayStyle}}>
            <div className='about__content'>
                <div className="about__content-picture"></div>
                <div className='about__content-container'>
                    <h1 className='about__content-title'>About Me</h1>
                </div>
            </div>
            <Cards/>
        </div>
    )
}

export default AboutScreen;