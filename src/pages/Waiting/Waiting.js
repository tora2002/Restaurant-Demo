import React from 'react';
import './Waiting.css';
import Card from '../../components/Card/Card';
import hero from '../../assets/waiting-hero.gif';
import UploadBtn from '../../components/UploadButton/UploadButton'

function Waiting() {

    return (
        //classname 'hero', 'heading' is inherited from home.css. This is a very bad practice!
        <div className='hero'>
            <div className='waiting-card-container'>
                <UploadBtn/>
                <Card content={
                    <div className='waiting-card-contents'>
                        <h1 className='waiting-card-heading'>Chill <span>Out</span></h1>
                    </div>
                }/>
            </div>
        </div>
    );
}

export default Waiting;