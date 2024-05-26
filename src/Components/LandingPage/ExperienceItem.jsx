import durationLogo from '../../assets/stopwatch.svg';
import roleLogo from '../../assets/bullseye.svg';
import locationLogo from '../../assets/geo-alt-fill.svg';

function ExperienceItem({ companyName, period, role, location, logo, details }) {
    return (
        <div className='individualExp'>
            <div className='companyNameAndPeriod'>
                <p style={{ fontWeight: 'bold' }}>{companyName}</p>
                <p style={{ fontWeight: 'bold' }}>{period}</p>
            </div>
            <div className='roleAndLocation'>
                <p style={{ fontWeight: 'bold' }}>{role}</p>
                <p style={{ fontWeight: 'bold' }}>{location}</p>
            </div>
            <div className='phoneScreen'>
                <p><span><img style={{ width: 30, marginRight: 5, verticalAlign: 'middle' }} src={logo} alt={`${companyName} logo`} /></span>{companyName}</p>
                <p><span><img style={{ width: 30, marginRight: 5, verticalAlign: 'middle' }} src={roleLogo} alt="Role logo" /></span>{role}</p>
                <p><span><img style={{ width: 30, marginRight: 5, verticalAlign: 'middle' }} src={durationLogo} alt="Duration logo" /></span>{period}</p>
                <p><span><img style={{ width: 30, marginRight: 5, verticalAlign: 'middle' }} src={locationLogo} alt="Location logo" /></span>{location}</p>
            </div>
            <div className='experienceDetails'>
                {details.map((detail, index) => (
                    <p key={index} className='sectionContent'>{detail}</p>
                ))}
            </div>
        </div>
    );
}

export default ExperienceItem;