import React from 'react';
import './sidebar.scss';
import ButtonAbout from '../buttons/buttonAbout.jsx';
import ButtonWork from '../buttons/buttonWork.jsx';
import ButtonContact from '../buttons/buttonContact.jsx';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__content'>

                <div className='sidebar__content-button'>
                    <ButtonAbout/>
                </div>

                <div className='sidebar__content-button'>
                     <ButtonWork/>
                </div>

                <div className='sidebar__content-button'>
                    <ButtonContact/>
                </div>
            </div>
        </div>
    );
};


export default SideBar;