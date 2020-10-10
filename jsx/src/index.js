// Import the React and ReacDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = () => {
    const buttonText='Click me';
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label> 
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
        </div>
    );
}

// Take the React component and hsow it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);