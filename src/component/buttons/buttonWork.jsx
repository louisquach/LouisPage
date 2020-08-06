import React from 'react';
import {connect} from 'react-redux';
import './button.scss';
import {displayWork} from '../../redux/button.action';

const ButtonWork = ({displayWork}) => {
    return (
        <button className='displayButton' name='work-btn' onClick={displayWork}>Work</button>
    )
};

const mapDispatchToProps = dispatch => ({
    displayWork: () => dispatch(displayWork()),
});

export default connect(null,mapDispatchToProps)(ButtonWork);