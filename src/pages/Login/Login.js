import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

function Login() {
    const navigate = useNavigate();
    return(
        <>
        <Header />
            <div className='mainContainer'>
                <div className='cardContainer'>
                    <Card content={
                        <div className='cardContent'>
                            <div className='cardText'>
                                <h1 className='heading'>Taste<span>Buds</span></h1>
                            </div>
                            <div className='username'>
                                <Input placeholder={'username'}
                                />
                            </div>
                            <div className='password'>
                                <Input placeholder={'password'}
                                />   
                            </div>

                            <div className='buttonContainer'>
                                <Button text={
                                    <p className='buttonText'>Login</p>
                                }
                                />
                                <Button text={
                                    <p className='buttonText'>Register</p>
                                }
                                onClickHandler={() => navigate("/register")}/>
                            </div>
                        </div>
                    } isFloating={true}/>    
                    </div>
            </div>        
        </>
    )
}

export default Login;
