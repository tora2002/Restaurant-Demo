import React from 'react';
import './Register.css';
//import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

function Register() {
    return(
    <>
        <Header />
            <div className='mainContainer'>
                <div className='cardContainer'>
                    <Card content={
                        <div className='cardContent'>
                            <div className='inputContainer'>
                                <Input 
                                        placeholder={'email'}
                                />
                                <Input 
                                    placeholder={'confirm password'}
                                />
                            </div>

                            <div className='inputContainer'>
                                <Input placeholder={'password'}
                                />
                                <Input placeholder={'username'}
                                />
                            </div>
                            <div className='inputContainer1'>
                                <div className='description'>    
                                    <Input 
                                            placeholder={'description (250 words max)'}                                           
                                        />
                                </div>
                                <div className='upload'>    
                                    {/* Need Help Implementing the upload button */}
                                </div>
                                
                            </div>
                            <div className='buttonContainer'>
                                <Button text={
                                    <p className='buttonText'>Register</p>
                                }
                                />
                            </div>
                        </div>
                    } isFloating={true}/>    
                    </div>
            </div>        
        </>
    )
}

export default Register;

