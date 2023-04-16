import React from 'react';
import './Register.css';
//import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import UploadButton from '../../components/UploadButton/UploadButton';

function Register() {
    return(
    <>
        <Header />
            <div className='register-mainContainer'>
                <div className='register-cardContainer'>
                    <Card content={
                        <div className='register-cardContent'>
                             <div className='register-inputContainer'>
                                <Input 
                                        placeholder={'email'}
                                />
                                <Input 
                                    placeholder={'confirm password'}
                                />
                            </div>

                            <div className='register-inputContainer'>
                                <Input placeholder={'password'}
                                />
                                <Input placeholder={'username'}
                                />
                            </div>
                            <div className='register-inputContainer1'>
                                <div className='description'>    
                                    <Input 
                                            placeholder={'description (250 words max)'}                                           
                                        />
                                </div>
                               <div className='upload'>
                                    <UploadButton />    
                                </div> 
                                
                            </div>
                            <div className='register-buttonContainer'>
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

