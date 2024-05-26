import React, { useState } from "react";
import './Header.css'
import profilePic from '../../../public/profile-pic.png';
import menuIcon from '../../assets/menuIcon.svg'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header({ clickToAbout, clickToExp, clickToEdu, menuValue, openCloseMenu }) {
    const navigate = useNavigate();
    const isOnHireMePage = location.pathname === '/hireme';
    return (
        <>
            <header className="header">
                <div className="headerLeft">
                    <img src={profilePic} className="profilePic" />
                    <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToAbout}>About</button>
                    <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToExp}>Experience</button>
                    <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToEdu}>Education</button>
                    <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }}>Projects</button>
                </div>
                {!isOnHireMePage && <button className="headerRightHireMe" onClick={() => navigate('/hireme')}>
                    <p>Hire Me</p>
                </button>}
                <button className="headerRightMenuIcon" onClick={openCloseMenu}>
                    <img style={{ width: 30 }} src={menuIcon} />
                </button>
            </header>
            <div className={menuValue ? 'sidePanelPhone  menuOpen' : 'sidePanelPhone'}>
                <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToAbout}>About</button>
                <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToExp}>Experience</button>
                <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToEdu}>Education</button>
                <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }}>Projects</button>
            </div>
            {!isOnHireMePage && <button className="headerRightHireMePhone" onClick={() => navigate('/hireme')}>
                <p>Hire Me</p>
            </button>}
        </>
    )
}

export default Header;