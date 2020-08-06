import React from 'react';
import SideBar from '../component/sidebar/sidebar';
import MainScreen from '../component/screens/mainscreen';
import './homepage.scss';
import Footer from '../component/footer/footer'

const HomePage = () => {

    return (
        <div className='homepage'>
            <MainScreen/>
            <SideBar/>
            <Footer/>
        </div>
    );
}

   

export default HomePage;