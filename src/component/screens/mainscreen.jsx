import React from 'react';
import './mainscreen.scss';
import AboutScreen from './about/about';
import WorkScreen from './works/works';
import ContactScreen from './contact/contact';
import {connect} from 'react-redux';

const MainScreen = ({displayAbout, displayWork, displayContact, displayIntroduce}) => {

    return (
        <div className='mainscreen'>
            <div className='mainscreen__content'>
                <div className='mainscreen__content-detail'>

                    <AboutScreen displayStyle={displayAbout} />

                    <WorkScreen  displayStyle={displayWork}  />

                    <ContactScreen displayStyle={displayContact}/>

                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    displayIntroduce: state.showScreen.intro,
    displayAbout: state.showScreen.about,
    displayWork: state.showScreen.work,
    displayContact: state.showScreen.contact
});


export default connect(mapStateToProps)(MainScreen);
