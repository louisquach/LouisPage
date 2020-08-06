import React from 'react';
import {connect} from 'react-redux';
import './button.scss';
import {displayAbout} from '../../redux/button.action';

const ButtonAbout = ({displayAbout}) => {
    return (
        <button className='displayButton' name='about-btn' onClick={displayAbout}>About</button>
    )
};

const mapDispatchToProps = dispatch => ({
    displayAbout: () => dispatch(displayAbout()),
});

export default connect(null, mapDispatchToProps)(ButtonAbout);
