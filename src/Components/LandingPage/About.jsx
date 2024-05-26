function About() {
    return (
        <div className='aboutSection'>
            <div className='bulletPoint'></div>
            <div className='contentBody'>
                <h1 className='title'>About</h1>
                <p className='sectionContent'>
                    I am a tech-savvy person driven by curiosity. I have extensive job experience in Angular development and some experience in React as well <span style={{ fontWeight: 'bold', color: 'purple' }}>(this website is made using React JS)</span>.
                </p>
                <p className='sectionContent'>
                    Over the past 1.5 years, I’ve realized that technical knowledge is always available on the internet, and I am equally proficient in it as any other employee in my current or future organizations.
                </p>
                <p className='sectionContent'>
                    What actually makes me unique and different from others is that I don’t see my job as just a “job” or a “9-5 task.” Instead, my work gives me as much thrill and enjoyment as a video game does, because it is an opportunity for me to contribute towards success, irrespective of the impact it has.
                </p>
            </div>
        </div>
    )
}

export default About;