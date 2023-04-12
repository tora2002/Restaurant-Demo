import React from 'react';
import './Decision.css';
import Card from '../../components/Card/Card';
import menuImage from '../../assets/decision-dummyfoodimg.png'
import kirby from '../../assets/decision-kirby.gif'

function Decision() {

    return (
        <div className='decision-page-container'>
            <div className='decision-floating-card-container'>
                <Card content={
                    <div className='decision-floating-card-content'>
                        <h1 className='decision-floating-card-heading'>Chow Down <span>Time??</span></h1>
                        <h3 className='decision-floating-card-subheading'>Buckle in everyone, it's eating time</h3>
                        <div className='decision-outline-card-container'>
                            <Card content={
                                <div className='decision-outline-card-content'>
                                    <div className='decision-outline-card-content-LHS'>
                                        <img className='decision-outline-card-menu-image' src={menuImage} alt='food' />
                                    </div>
                                    <div className='decision-outline-card-content-RHS'>
                                        <h1 className='decision-outline-card-content-RHS-heading'>Menu Name <span>Address</span></h1>
                                        <p className='decision-outline-card-content-RHS-paragraph'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                                        <hr className='' style={{width: '100%', background: 'linear-gradient(to bottom right, #ffcf42, #EC6F34, #E24C52, #C6427B)', height: '2px', border: '0px',}} />
                                        <img className='decision-outline-card-kirby' src={kirby} alt='kirby' />
                                    </div>
                                </div>
                            } isFloating={false} />
                        </div>
                    </div>
                } isFloating={true} />
            </div>
        </div>
    );
}

export default Decision;