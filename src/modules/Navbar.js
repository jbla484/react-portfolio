import { Link } from 'react-router-dom';

import { useState } from 'react';

export default function Navbar() {
    const [page, setPage] = useState('/');

    const pages = {
        '/': '/education',
        '/education': '/experience',
        '/experience': '/skills',
        '/skills': '/projects',
        '/projects': '/interests',
        '/interests': '/',
    };

    function hideMenu() {
        document.getElementById('container2').style.display = 'none';
        document.getElementById('checkbox4').checked = false;
    }

    let timeout;

    return (
        <>
            <nav>
                <div className='navWrapper'>
                    <div className='desktopView'>
                        <div className='imageWrapper'>
                            <img
                                src={require('../images/man.jpg')}
                                alt='me'
                                width={'100%'}
                                height={'100%'}
                                style={{
                                    borderRadius: '50%',
                                    // objectFit: 'contain',
                                    backgroundSize: 'cover',
                                }}
                            ></img>
                        </div>
                        <div>
                            <Link
                                to='/'
                                onClick={() => {
                                    setPage('/');
                                }}
                            >
                                LANDING
                            </Link>
                        </div>
                        <div>
                            <Link
                                onClick={() => {
                                    setPage('/education');
                                }}
                                to='/education'
                            >
                                EDUCATION
                            </Link>
                        </div>
                        <div>
                            <Link
                                onClick={() => {
                                    setPage('/experience');
                                }}
                                to='/experience'
                            >
                                EXPERIENCE
                            </Link>
                        </div>
                        <div>
                            <Link
                                onClick={() => {
                                    setPage('/skills');
                                }}
                                to='/skills'
                            >
                                SKILLS
                            </Link>
                        </div>
                        <div>
                            <Link
                                onClick={() => {
                                    setPage('/projects');
                                }}
                                to='/projects'
                            >
                                PROJECTS
                            </Link>
                        </div>
                        <div>
                            <Link
                                onClick={() => {
                                    setPage('/interests');
                                }}
                                to='/interests'
                            >
                                INTERESTS
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <input
                    type='checkbox'
                    id='checkbox4'
                    className='checkbox4 visuallyHidden'
                    onClick={(e) => {
                        if (document.getElementById('checkbox4').checked) {
                            if (timeout) clearTimeout(timeout);
                            document.getElementById(
                                'container2'
                            ).style.animation = '1s slide-right';
                            document.getElementById(
                                'container2'
                            ).style.display = 'block';
                        } else {
                            document.getElementById(
                                'container2'
                            ).style.animation = '1s slide-left';
                            timeout = setTimeout(() => {
                                document.getElementById(
                                    'container2'
                                ).style.display = 'none';
                            }, 1000);
                        }
                    }}
                ></input>
                <label htmlFor='checkbox4'>
                    <div className='hamburger hamburger4'>
                        <span className='bar bar1'></span>
                        <span className='bar bar2'></span>
                        <span className='bar bar3'></span>
                        <span className='bar bar4'></span>
                        <span className='bar bar5'></span>
                    </div>
                </label>
            </div>

            <div
                className='container2'
                id='container2'
            >
                <div className='menuItems'>
                    <Link
                        to='/'
                        onClick={() => hideMenu()}
                        style={{ fontSize: '26px' }}
                    >
                        LANDING
                    </Link>
                </div>
                <div className='menuItems'>
                    <Link
                        to='/education'
                        onClick={() => hideMenu()}
                        style={{ fontSize: '26px' }}
                    >
                        EDUCATION
                    </Link>
                </div>
                <div className='menuItems'>
                    <Link
                        to='/experience'
                        onClick={() => hideMenu()}
                        style={{ fontSize: '26px' }}
                    >
                        EXPERIENCE
                    </Link>
                </div>
                <div className='menuItems'>
                    <Link
                        to='/skills'
                        onClick={() => hideMenu()}
                        style={{ fontSize: '26px' }}
                    >
                        SKILLS
                    </Link>
                </div>
                <div className='menuItems'>
                    <Link
                        to='/projects'
                        onClick={() => hideMenu()}
                        style={{ fontSize: '26px' }}
                    >
                        PROJECTS
                    </Link>
                </div>
                <div className='menuItems'>
                    <Link
                        to='/interests'
                        onClick={() => hideMenu()}
                        style={{ fontSize: '26px' }}
                    >
                        INTERESTS
                    </Link>
                </div>
            </div>

            <Link
                onClick={() => setPage(pages[page])}
                to={page}
                style={{ zIndex: '44' }}
            >
                <div className='arrowContainer'>
                    <div className='arrow bounce'></div>
                </div>
            </Link>
        </>
    );
}
