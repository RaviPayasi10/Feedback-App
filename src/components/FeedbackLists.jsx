import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from "./feedbackItem"
import {useContext} from 'react'
// import FeedbackContext from '../context/FeedbackContext'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList( ) {

    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

    // With Animations
    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map( (item) => (
                <motion.div 
                    key={item.id}
                    initial = {{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity: 0}}
                >
                    <FeedbackItem key={item.id} item={item} 
                    />
                </motion.div>
                
            ))}
            </AnimatePresence>
            
        </div>
    )

    // Without Animations 
    // return (
    //     <div className="feedback-list">
    //         {feedback.map( (item) => (
    //             <FeedbackItem key={item.id} item={item} 
    //             handleDelete = {handleDelete}/>
    //         ))}
    //     </div>
    // )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackList