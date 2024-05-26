import React from 'react';
import durationLogo from '../../assets/stopwatch.svg';
import roleLogo from '../../assets/bullseye.svg';
import locationLogo from '../../assets/geo-alt-fill.svg';

function EducationItem({ instituteName, yearCompleted, domainOfEducation, location, logo, grade }) {
    return (
        <div className='individualExp'>
            <div className='companyNameAndPeriod'>
                <p style={{ fontWeight: 'bold' }}>{instituteName}</p>
                <p style={{ fontWeight: 'bold' }}>{yearCompleted}</p>
            </div>
            <div className='roleAndLocation'>
                <p style={{ fontWeight: 'bold' }}>{domainOfEducation}</p>
                <p style={{ fontWeight: 'bold' }}>{location}</p>
            </div>
            <div className='phoneScreen'>
                <p><span><img style={{ width: 30, marginRight: 5, verticalAlign: 'middle' }} src={logo} alt={`${instituteName} logo`} /></span>{instituteName}</p>
                <p><span><img style={{ width: 30, marginRight: 5, verticalAlign: 'middle' }} src={roleLogo} alt="Role logo" /></span>{domainOfEducation}</p>
                <p><span><img style={{ width: 30, marginRight: 5, verticalAlign: 'middle' }} src={durationLogo} alt="Duration logo" /></span>{yearCompleted}</p>
                <p><span><img style={{ width: 30, marginRight: 5, verticalAlign: 'middle' }} src={locationLogo} alt="Location logo" /></span>{location}</p>
            </div>
        </div>
    );
}

export default EducationItem;
