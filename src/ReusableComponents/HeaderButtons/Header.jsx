import React, { useState } from "react";
import './Header.css'
import profilePic from '../../../public/profile-pic.png';
import menuIcon from '../../assets/menuIcon.svg'
function Header({ clickToAbout, clickToExp, clickToEdu, menuValue, openCloseMenu }) {

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
                <button className="headerRightHireMe">
                    <p>Hire Me</p>
                </button>
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
            <button className="headerRightHireMePhone">
                <p>Hire Me</p>
            </button>
        </>
    )
}

export default Header;