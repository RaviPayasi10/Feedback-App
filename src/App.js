// import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import FeedbackItem from './components/feedbackItem'
import FeedbackList from './components/FeedbackLists'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/About'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'


// npm i 'framer-motion'
// npm i 'react-icons'
// npm i 'react-router-dom'

// To run as build - 
// 1. npm run build - Will make a build folder
// 2. npm i -g serve
// 3. serve -s build 
// If in step 3, it shows policies can't be ran as they are blocked, run below commands
// Get-ExecutionPolicy - This will be restricted, change it 
// Set-ExecutionPolicy RemoteSigned
// Restart your system
// Now run 3rd command, serve -s build
// To stop build - Ctrl + C

// Make it again restricted after build is done and closed
// Set-ExecutionPolicy Restricted
// Restart your system.

function App() {
    // const [feedback, setFeedback] = useState(FeedbackData)



    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm  />
                                <FeedbackStats />
                                <FeedbackList  />
                            </>
                        }>

                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>

            </Router>
        </FeedbackProvider>
    )
}

export default App