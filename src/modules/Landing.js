function Landing() {
    return (
        <div className='landing'>
            <div className='landingWrapper'>
                <div>
                    <span className='firstName'>JAMES</span>{' '}
                    <span className='lastName'>BLANKENSHIP</span>
                </div>
                <div>
                    <i
                        className='fa-solid fa-location-dot'
                        style={{ padding: '0 5px 0 0' }}
                    ></i>
                    <span className='location'>Oregon</span>{' '}
                    <i
                        className='fa-solid fa-envelope'
                        style={{ padding: '0 5px' }}
                    ></i>
                    <span className='email'>Jbla484@wgu.edu</span>
                </div>
                <div>
                    <p style={{ padding: '20px 0' }}>
                        I have a true passion for creating things with code. I
                        love to learn new things and progress my skills.
                    </p>
                </div>
                <div>
                    <a
                        href='https://www.linkedin.com/in/james-blankenship-b74a3b204/'
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: 'black' }}
                    >
                        <i className='fa-brands fa-linkedin icons'></i>
                    </a>
                    <a
                        href='https://github.com/jbla484'
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: 'black' }}
                    >
                        <i className='fa-brands fa-square-github icons'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Landing;
