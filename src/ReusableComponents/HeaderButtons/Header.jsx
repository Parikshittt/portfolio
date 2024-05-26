import React, { useState } from "react";
import './Header.css'
import profilePic from '../../../public/profile-pic.png';
import menuIcon from '../../assets/menuIcon.svg'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import callme from '../../assets/callMe.svg'
import email from '../../assets/email.svg'
function Header({ clickToAbout, clickToExp, clickToEdu, clickToSkills, menuValue, openCloseMenu, CopyNumber }) {
    const navigate = useNavigate();
    const isOnHireMePage = location.pathname === '/hireme';
    return (
        <>
            <header className="header">
                <div className="headerLeft">
                    <img src={profilePic} className="profilePic" />
                    {!isOnHireMePage && <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToAbout}>About</button>}
                    {!isOnHireMePage && <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToExp}>Experience</button>}
                    {!isOnHireMePage && <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToEdu}>Education</button>}
                    {!isOnHireMePage && <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToSkills}>Skills</button>}
                    {isOnHireMePage && <img src={callme} className="callMe" onClick={() => { navigator.clipboard.writeText('7837615955'); toast.success('Successfully Copied Phone Number') }} />}
                    {isOnHireMePage && <img src={email} className="callMe" onClick={() => { navigator.clipboard.writeText('parikshitsingh1104@gmail.com'); toast.success('Successfully Copied E-mail') }} />}

                </div>
                {!isOnHireMePage && <button className="headerRightHireMe" onClick={() => navigate('/hireme')}>
                    <p>Hire Me</p>
                </button>}
                {!isOnHireMePage && <button className="headerRightMenuIcon" onClick={openCloseMenu}>
                    <img style={{ width: 30 }} src={menuIcon} />
                </button>}
            </header>
            <div className={menuValue ? 'sidePanelPhone  menuOpen' : 'sidePanelPhone'}>
                <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToAbout}>About</button>
                <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToExp}>Experience</button>
                <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToEdu}>Education</button>
                <button style={{ background: 'none', border: 'none', fontSize: 20, fontWeight: 'bold' }} onClick={clickToSkills}>Skills</button>
            </div>
            {!isOnHireMePage && <button className="headerRightHireMePhone" onClick={() => navigate('/hireme')}>
                <p>Hire Me</p>
            </button>}
        </>
    )
}

export default Header;