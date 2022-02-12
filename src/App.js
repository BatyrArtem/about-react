import React from 'react'
import Main from './components/Main.js'
import Navbar from './components/Navbar'

export default function App() {

    const [darkMode, setDarkMode] = React.useState(true);

    function toggle() {
        setDarkMode(prevState => !prevState)
    }

    return(
        <div className='container'>
            <Navbar 
                toggleDarkMode={toggle}
                darkMode={darkMode}
            />
            <Main 
                darkMode={darkMode}
            />
        </div>
    )
}