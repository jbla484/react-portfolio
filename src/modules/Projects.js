export default function Projects() {
    return (
        <div className='experience'>
            <div className='experienceWrapper'>
                <div className='experienceHeader2'>
                    <h2>PROJECTS</h2>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h3 style={{ marginBottom: '15px' }}>CryptoStats</h3>
                    <img
                        src={require('../images/cryptostats.png')}
                        alt='me'
                        width={'100%'}
                        height={'00%'}
                        style={{
                            borderRadius: '10px',
                        }}
                    ></img>
                    <p style={{ margin: '10px 0' }}>
                        Displays all popular crypto currency data in an easy to
                        use and readable table. This data is pulled from an
                        external API.{' '}
                    </p>
                    <a
                        href='https://jamesb-cryptostats.netlify.app/'
                        target='_blank'
                        rel='noreferrer'
                        style={{
                            backgroundColor: '#5aa185',
                            padding: '10px',
                            borderRadius: '5px',
                        }}
                    >
                        Live Demo
                    </a>
                </div>

                <div>
                    <h3>WebChat</h3>
                    <h3>image</h3>
                    <p>
                        Displays all popular crypto currency data in an easy to
                        use and readable table. This data is pulled from an
                        external API.{' '}
                    </p>
                </div>
            </div>
        </div>
    );
}
