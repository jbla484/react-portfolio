import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Interests from './Interests';
import Projects from './Projects';

import Navbar from './Navbar';
import Landing from './Landing';

import { Routes, Route } from 'react-router-dom';

import '../styles/App.css';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route
                    index
                    element={<Landing />}
                />
                <Route
                    path='education'
                    element={<Education />}
                />
                <Route
                    path='experience'
                    element={<Experience />}
                />
                <Route
                    path='skills'
                    element={<Skills />}
                />
                <Route
                    path='projects'
                    element={<Projects />}
                />
                <Route
                    path='interests'
                    element={<Interests />}
                />
            </Routes>
        </div>
    );
}

export default App;
