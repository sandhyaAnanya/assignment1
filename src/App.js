import './App.css';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom'
import routing from './router';



function App() {
  return (
    <Router>
    <div className="App">
    
      {routing}
      <Contact/>
      
    </div>
    </Router>
  );
}

export default App;
