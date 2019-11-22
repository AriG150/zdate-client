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
  const [selectedUser, setSelectedUser] = useState({})
  const [userId, setUserId] = useState(0)

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
    let url = `http://localhost:3001/users/${userId}`
    console.log(url)
    axios.get(url)
      .then((res) => {
        console.log(`This is the selected user: ${res.data.foundUser}`)
        setSelectedUser(res.data.foundUser)
      })
  }, [userId])

  return (
    <div>
      <Router>
        <Route exact path="/" render={ () => <Homepage  /> } />
        <Route exact path="/list" render={ () => <List users={users} ourUser={ourUser} setUserId={setUserId}/> } /> 
        <Route exact path="/profile" render={ () => <Profile selectedUser={selectedUser} /> } /> 
      </Router>
    </div>
  )
}

export default App;
