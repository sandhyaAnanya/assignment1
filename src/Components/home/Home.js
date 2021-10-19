import React from 'react'

function Home(props) {
    console.log("home",props);
    const navigateToHome=()=>{
        console.log(props);
        props.history.push("/about")

    }
    return (
        <div>
            home page
            <button onClick={navigateToHome}>navigate to home</button>
        </div>
    )
}

export default Home
