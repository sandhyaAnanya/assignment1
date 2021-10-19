import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from "./Components/About/About";
import Home from './Components/home/Home';


const routing=(
    <div>
        <div>
       <Link to="/">Home</Link>
       </div>
       <div>
        <Link to="/about">About</Link>
       </div>
       <Route exact path="/" component={Home}/>{/* to display the path in url */}
       <Route path="/about" component={About}/>{/* to display the path in url */}
    </div>
)

export default routing
