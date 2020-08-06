import React from 'react';
import'./contact.scss';
import ContactForm from '../../contactForm/contact-form';
import video from '../../../images/production ID 4377755.mp4';

const ContactScreen = ({displayStyle}) => {

    return (
        <div className='contact__container' style={{display: displayStyle}}>
            <div className='contact__container-content'>
                <ContactForm/>
            </div>
            <div className='contact__background-video'>
                <video className='background-pic' autoPlay loop muted>
                    <source src={video} />
                </video>
            </div>
        </div>
    )
}

export default ContactScreen;