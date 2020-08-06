import React from 'react';
import './works.scss';


const WorkScreen = ({displayStyle}) => {
    return (
        //eslint-disable-next-line

        <div className='workscreen__container' style={{display: displayStyle}}>
            <div className='workscreen__container-slide'>
                <div className='first-3-items'>

                    <div className='work_item'>
                        <a href='https://louisquach.github.io/Dices/' type='button' className='work_item-content1' ></a>
                        <h5 className='work_item-title'>random dices</h5>
                    </div>

                    <div className='work_item'>
                        <a href='https://louisquach.github.io/drumkit/' type='button' className='work_item-content2' ></a>
                        <h5 className='work_item-title'>play sound</h5>
                    </div>

                    <div className='work_item'>
                        <a href='https://louisquach.github.io/AppKeeper/' type='button' className='work_item-content3' ></a>
                        <h5 className='work_item-title'>Keeper app</h5>
                    </div>

                </div>
                <div className='last-3-items'>
                    <div className='work_item'>
                        <a href='https://louisquach.github.io/louisBlog/' type='button' className='work_item-content4' ></a>
                        <h5 className='work_item-title'>personal blog</h5>
                    </div>

                    <div className='work_item'>
                        <a href='https://murmuring-sea-67258.herokuapp.com/' type='button' className='work_item-content5'></a>
                        <h5 className='work_item-title'>Subscriber</h5>
                    </div>

                    <div className='work_item'>
                        <a href='https://louis-store.herokuapp.com/' type='button' className='work_item-content6'></a>
                        <h5 className='work_item-title'>e-store</h5>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

//work_item-content content_2
export default WorkScreen;