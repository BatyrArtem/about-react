import React from 'react'
// import ReactIcon2 from '../images/reactjs-icon2.png'

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className='main--title'>Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                <li>React is a JavaScript library</li>
                <li>Keep your components small</li>
                <li>Virtual DOM is faster than real DOM</li>
                <li>Declarative, efficient, and flexible</li>
            </ul>
        </main>
        
    )
}