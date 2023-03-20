import React from 'react';
import './header.css';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className='headerContainer'>
            <div className='logo'>
                {/* add logo here */}
            </div>
            <div className='pageContainer'>
                <button onClick={() => navigate("/home")} className='headerText'>Home</button>
                <button onClick={() => navigate("/group")} className='headerText'>Create Group</button>
                <button onClick={() => navigate("/upload")} className='headerText'>Upload Food</button>
                <button onClick={() => navigate("/login")} className='headerText'>Login</button>
            </div>
        </div>
    );
}

export default Header;