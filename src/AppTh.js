function App1() {
    // Anything that is inside this return statement seems like HTML but in 
    // reality, its JSX
    const body = "Hello, i am body"

    const comments = [
        {id : 1, value:"Comment 1"},
        {id : 2, value:"Comment 2"},
        {id : 3, value:"Comment 3"}
    ]

    const condition = (
        <div className="comments">
                {/* <h3>Hello</h3> */}
                <ul>
                    {comments.map((comment,index) => (
                        <li key={index}>{comment.value}</li>
                    ))}
                </ul>
            </div>
    )

    // How to use conditionals
    const showComments = true; 
    return (
        // <h1>Hello, from the app component</h1>
        // <p>This won't work</p>
        // Above lines won't work because we can return only one component , but here there are 2 
        // component. To make it work, we have to wrap them under one component
        <>
            <h1 className = "Hello">Hello, from the app component</h1>
            <p>This will work</p>
            {/* Instead of class keyword, we have className  */}

            {/* Dynamic values can be added inside it by adding it
                inside "{}" */}
            {/* {5+5} */}

            {showComments ? 'yes' : 'no'}
            {/* Now, instead of 'yes' or 'no', we can put entire div below in place of 'yes'.
                But, even that is too cumbersome, so we can put entire div in a variable, 
                then we can replace variable in conditional */}
            {showComments ? condition : "No comments"}
            <div className="comments">
                {/* <h3>Hello</h3> */}
                <ul>
                    {comments.map((comment,index) => (
                        <li key={index}>{comment.value}</li>
                    ))}
                </ul>
            </div>
        </>
    )

}
export default App