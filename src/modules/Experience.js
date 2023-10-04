function Experience() {
    return (
        <div className='experience'>
            <div className='experienceWrapper'>
                <div className='experienceHeader'>
                    <h2>EXPERIENCE</h2>
                </div>

                <div className='experienceTitles'>
                    <div className='experiencePosition'>
                        <h3>Software Engineer</h3>
                    </div>
                    <div>
                        <span className='colorGreen'>July 2022 - Present</span>
                    </div>
                </div>
                <div className='lightGray'>SilverLeaf Electronics</div>
                <div style={{ marginTop: '10px' }}>
                    Works with multiple external RV companies to provide them
                    with software updates to their existing embedded systems.
                    Deals with everything from front-end work on embedded
                    devices & web pages to back-end work with implementing
                    hardware systems like inverters, battery systems, lighting
                    controllers, video cameras, etc into our existing systems.{' '}
                </div>
            </div>
        </div>
    );
}

export default Experience;
