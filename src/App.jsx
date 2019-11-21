import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,
        Route, 
        Link } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import List from './List';
import Profile from './Profile'

function App() {
  // const [ourUser, setourUser] = useState([])
  const [users, setUsers] = useState([])
  const [userId, setuserId] = useState()

  return (
    <div>
      <Router>
        <Route exact path="/" render={ () => <Homepage  /> } />
        <Route exact path="/list" render={ () => <List users={users} selectUser={setuserId}/> } /> 
        <Route exact path="/profile" render={ () => <Profile users={users} /> } /> 
      </Router>
    </div>
  )
}

export default App;
