import React from 'react'
import { withRouter } from 'react-router-dom'


function Contact(props) {
    console.log('contact',props);
    const navigateToHome=()=>{
        console.log(props);
        props.history.push('/')

    }
    return (
        <div>
            contact page
            <button onClick={navigateToHome}>navigateToHome</button>
            
        </div>
    )
}

export default withRouter(Contact);
