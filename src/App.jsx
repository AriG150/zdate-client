import React from 'react';
import { BrowserRouter as Router,
        Route, 
        Link } from 'react-router-dom';
import './App.css';
import List from './List';

function App() {
  // const [ourUser, setourUser] = useState([])
  const [users, setUsers] = useState([])
  return (
    <div>
      <h2>ZDate</h2>
      <h5>Are you a short-range user looking for a long-term relationship?</h5>
      <Router>
      <Link to="/list"> Login </Link>
        <Route exact path="/list" render={ () => <List users={users} /> } />  
      </Router>
    </div>
  )
}

export default App;
