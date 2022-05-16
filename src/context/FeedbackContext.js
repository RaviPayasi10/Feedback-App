import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([
        // {
        //     id: 1,
        //     text: 'This is feedback item 1',
        //     rating: 10
        // },
        // {
        //     id: 2,
        //     text: 'This is feedback item 2',
        //     rating: 8
        // },
        // {
        //     id: 3,
        //     text: 'This is feedback item 3',
        //     rating: 9
        // }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false 
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedback
    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete ?')) {

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map( (item) => (
            item.id === id ? {...item, ...updItem} : item )))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback ,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
