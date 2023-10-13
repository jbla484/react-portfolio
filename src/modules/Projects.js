export default function Projects() {
    return (
        <div className='experience'>
            <div className='experienceWrapper'>
                <div className='experienceHeader2'>
                    <h2>PROJECTS</h2>
                </div>

                <div
                    className='projectContainer'
                    style={{ textAlign: 'center', marginBottom: '20px' }}
                >
                    <h3 style={{ padding: '15px 0' }}>CryptoStats</h3>
                    <img
                        className='projectImage'
                        src={require('../images/cryptostats.png')}
                        alt='me'
                        width={'80%'}
                        height={'80%'}
                        style={{}}
                    ></img>
                    <p style={{ margin: '10px auto', width: '80%' }}>
                        Using React JS, this application displays all popular
                        crypto currency data in an easy to use, readable table.
                        This data is pulled from the external crypto coin API.{' '}
                    </p>
                    <div style={{ padding: '10px 0 30px 0' }}>
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
