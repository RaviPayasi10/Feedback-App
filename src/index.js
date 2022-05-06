import React from 'react';  // Gets react from react library
import ReactDOM from 'react-dom';   // Gets react dom  
import './index.css'
import App from './App'

// Rendering react - render here takes two arguments, one is the component that has to be inserted into the app,
// It is our main app component
// Second it will take the component where we want to add this first component, that is our root div
// ReactDOM.render(<h1>My App</h1>,document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    ,document.getElementById('root')
)

