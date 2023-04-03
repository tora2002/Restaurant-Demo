import React from 'react';
import './Waiting.css';
import Card from '../../components/Card/Card';
import hero from '../../assets/waiting-hero.gif';

function Waiting() {

    return (
        //classname 'hero', 'heading' is inherited from home.css. This is a very bad practice!
        <div className='hero'>
            <div className='waiting-card-container'>
                <Card content={
                    <div className='waiting-card-contents'>
                        <h1 className='waiting-card-heading'>Chill <span>Out</span></h1>
                        <h3 className='waiting-card-subheading'>Your friends ain't as fast as you boi. While you friends finish matching, go touch some grass</h3>
                        <img className='waiting-card-hero' src={hero}/>
                    </div>
                }/>
            </div>
        </div>
    );
}

export default Waiting;