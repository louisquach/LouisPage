import React from 'react';
import {connect} from 'react-redux';
import './button.scss';
import {displayContact} from '../../redux/button.action';

const ButtonContact = ({displayContact}) => {
    return (
        <button className='displayButton' name='contact-btn' onClick={displayContact}>Hire Me</button>
    )
};

const mapDispatchToProps = dispatch => ({
    displayContact: () => dispatch(displayContact())
});

export default connect(null,mapDispatchToProps)(ButtonContact);