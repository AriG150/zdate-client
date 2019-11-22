import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,
        Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Homepage from './Homepage';
import List from './List';
import Profile from './Profile'

function App() {
  const [ourUser, setourUser] = useState([])
  const [users, setUsers] = useState([])
  const [userId, setuserId] = useState()

  //Grab all users 
  useEffect(() => {
    axios.get('http://localhost:3001/users/')
      .then((res) => {
        setUsers(res.data.foundUser)
      })
  }, [])

  //Person you're signed in as
  useEffect(()=> {
    axios.get('http://localhost:3001/users/ouruser')
      .then((res) => {
        setourUser(res.data.foundUser[0])
      })
  }, [])

  //GET individual information 
  useEffect(() => {
    axios.get(`http://localhost:3001/users/${userId}`)
      .then((res) => {
        setuserId(res.data.foundUser)
      })
  }, [])

  return (
    <div>
      <Router>
        <Route exact path="/" render={ () => <Homepage  /> } />
        <Route exact path="/list" render={ () => <List users={users} ourUser={ourUser} selectedUser={setuserId}/> } /> 
        <Route exact path="/profile" render={ () => <Profile users={users} /> } /> 
      </Router>
    </div>
  )
}

export default App;
