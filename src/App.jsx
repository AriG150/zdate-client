import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,
        Route, 
        Link } from 'react-router-dom';
import './App.css';
import List from './List';

function App() {
  // const [ourUser, setourUser] = useState([])
  const [users, setUsers] = useState([])
  const [userId, setuserId] = useState()

  return (
    <div>
      <h2>ZDate</h2>
      <h5>So...the apocolypse happened. That sucked, right? </h5>
      <h6>But, like, honestly, in between killing people and running away I still want....companionship...</h6>
      <h6>Don't you?...</h6>
      <Router>
      <Link to="/list"> Enter </Link>
        <Route exact path="/list" render={ () => <List users={users} selectUser={setuserId}/> } />  
      </Router>
    </div>
  )
}

export default App;
