import React, { useState } from 'react';
import Header from '../../ReusableComponents/HeaderButtons/Header';
import './LandingPage.css';
import valuefyLogo from '../../assets/Valuefy.png';
import rtplLogo from '../../assets/images.jpeg';
import About from './About';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import ThaparLogo from '../../assets/thapar.png'
import dcmLogo from '../../assets/DCM.png'
import dpsLogo from '../../assets/DPS.jpeg'
import jsLogo from '../../assets/JS.png'
import htmlLogo from '../../assets/HTML.png'
import cssLogo from '../../assets/css.png'
import angularLogo from '../../assets/angular.png'
import reactLogo from '../../assets/reactLogo.svg'
import { Tooltip } from '@mui/material';


function LandingPage() {
    const [menu, setMenu] = useState(false);
    function openCloseMenu() {
        setMenu((menu) => !menu)
        console.log('menu open', menu)
    }
    const experiences = [
        {
            companyName: 'Valuefy Solutions',
            period: 'July 2023 - Present',
            role: 'SDE-1',
            location: 'Mumbai, Maharashtra',
            logo: valuefyLogo,
            details: [
                'Transitioning from a proof of concept (POC) based on low-code technology in React.js to Angular development demonstrated my adaptability and eagerness to learn new technologies. In my role, I implemented fixes and developed features based on client requirements, honing my problem-solving skills and client-focused mindset. Consistently delivering tasks before deadlines, I found efficient ways to complete assignments, contributing significantly to the projects\' success.',
                'My contributions to Angular development included localization efforts (i18n) and integrating pdfmake functionality into client applications. These tasks allowed me to collaborate closely with clients, ensuring their specific needs were met. Furthermore, daily client fixes and feature development helped me master essential Angular concepts such as lazy loading, guards, dependency injection, services, directives, and structure. I also gained proficiency in decorators, @Input/@Output, API integration, template-driven/reactive forms, and two-way data binding.',
                'One of my notable achievements was converting a client\'s React mobile app into an Angular library, which was then integrated into their website. This project not only showcased my ability to handle complex conversions but also emphasized my capability to enhance my debugging efficiency, significantly speeding up issue resolution. Through these experiences, I enhanced my Angular skills, ensuring high-quality, timely deliverables that met client expectations.'
            ]
        },
        {
            companyName: 'Relinns Technologies',
            period: 'Jan 2023 - June 2023',
            role: 'UI/HTML Intern',
            location: 'Mohali, Punjab',
            logo: rtplLogo,
            details: [
                'During my six-month UI/HTML internship, I primarily focused on HTML and CSS development tasks, which allowed me to build a strong foundation in front-end web development. Alongside these core responsibilities, I engaged in various side tasks such as video editing, which broadened my skill set and provided me with a diverse range of experiences.',
                'This experience offered valuable insights into design principles and user experience considerations beyond coding. Exposure to multiple facets of design enhanced my understanding of what constitutes effective design, enabling me to develop a holistic approach to user interface development that considers both visual and functional aspects.'
            ]
        }
    ];

    const educations = [
        {
            instituteName: 'Thapar Institue Of Engineering & Technology',
            yearCompleted: 'June 2023',
            domainOfEducation: 'Computer Science',
            location: 'Patiala, Punjab',
            logo: ThaparLogo,
            grade: '7 CGPA'
        },
        {
            instituteName: 'D.C Montessori',
            yearCompleted: 'May 2019',
            domainOfEducation: 'PCM',
            location: 'Chandigarh, Chandigarh',
            logo: dcmLogo,
            grade: '75%'
        },
        {
            instituteName: 'Delhi Public School',
            yearCompleted: 'May 2017',
            domainOfEducation: 'CBSE',
            location: 'Chandigarh, Chandigarh',
            logo: dpsLogo,
            grade: '75%'
        }
    ];

    function scrollToAbout() {
        const section = document.getElementById('aboutSection');
        section.scrollIntoView({ behavior: 'smooth' });
        openCloseMenu();
    }

    function scrollToExp() {
        const section = document.getElementById('experienceSection');
        section.scrollIntoView({ behavior: 'smooth' });
        openCloseMenu();
    }

    function scrollToEdu() {
        const section = document.getElementById('educationSection');
        section.scrollIntoView({ behavior: 'smooth' });
        openCloseMenu();
    }

    return (
        <>
            <Header
                clickToAbout={scrollToAbout}
                clickToExp={scrollToExp}
                clickToEdu={scrollToEdu}
                menuValue={menu}
                openCloseMenu={openCloseMenu}
            />
            <div className='storyLine'></div>
            <div className='content'>
                <div id='aboutSection'>
                    <About />
                </div>

                <div id="experienceSection" className='experienceSection'>
                    <div className='bulletPoint'></div>
                    <div className='contentBody'>
                        <h1 className='title'>Experience</h1>
                        {experiences.map((exp, index) => (
                            <ExperienceItem
                                key={index}
                                companyName={exp.companyName}
                                period={exp.period}
                                role={exp.role}
                                location={exp.location}
                                logo={exp.logo}
                                details={exp.details}
                            />
                        ))}
                    </div>
                </div>

                <div id="educationSection" className='experienceSection'>
                    <div className='bulletPoint'></div>
                    <div className='contentBody'>
                        <h1 className='title'>Education</h1>
                        <div className='individualExp'>
                            {educations.map((edu, index) => (
                                <EducationItem
                                    key={index}
                                    instituteName={edu.instituteName}
                                    yearCompleted={edu.yearCompleted}
                                    domainOfEducation={edu.domainOfEducation}
                                    location={edu.location}
                                    logo={edu.logo}
                                    grade={edu.grade}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div id="educationSection" className='experienceSection'>
                    <div className='bulletPoint'></div>
                    <div className='skillsBody'>
                        <h1 className='title'>Skills</h1>
                        <div className='skillsGroup'>
                            <Tooltip title="HTML">
                                <img style={{ width: 40 }} src={htmlLogo} />
                            </Tooltip>
                            <Tooltip title="CSS">
                                <img style={{ width: 40 }} src={cssLogo} />
                            </Tooltip>
                            <Tooltip title="JavaScript">
                                <img style={{ width: 40 }} src={jsLogo} />
                            </Tooltip>
                            <Tooltip title="Angular">
                                <img style={{ width: 40 }} src={angularLogo} />
                            </Tooltip>
                            <Tooltip title="React">
                                <img style={{ width: 40 }} src={reactLogo} />
                            </Tooltip>

                        </div>


                    </div>
                </div>


            </div>
        </>
    );
}

export default LandingPage;
