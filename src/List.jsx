import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/List.css';

function List(props){
  // const [ourUser, setourUser] = useState()
  // const [userId, setuserId] = useState()

  const mappedUsers = props.users.map((user, id) => (
    <div> 
      <div> <img src={user.photo} /></div>
      <div><Link onClick={() => props.setUserId(user._id)} key={id} to="/profile">{user.name} </Link></div>   
      <div>{user.bio}</div>
      <hr/>
    </div>
  ))


  return(
    <div>
      <h2 className="title">Humans In Your Area: </h2>
      <div className="myProfile">
        <img className="profilePhoto" src={props.ourUser.photo} alt=""/>
        <p>{props.ourUser.name}</p>
        <button>Inbox</button> <br/>
        <button>My Profile</button>
      </div>
      <div className="listUsers">
        {mappedUsers}
      </div>
    </div>
  )
}

export default List;
