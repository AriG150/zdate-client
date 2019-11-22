import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './List.css'

function List(props){
  // const [ourUser, setourUser] = useState()
  // const [userId, setuserId] = useState()

  const mappedUsers = props.users.map((user, id) => (
    <div className="userInfo"> 
      <div> 
        <img src={user.photo} />
      </div>
      <div>
        <div>
          <Link onClick={() => props.setUserId(user._id)} key={id} to="/profile" className="link">{user.name} </Link>
        </div>   
        <div className="userBio">
          {user.bio}
        </div>
      </div>
    </div>
  ))


  return(
    <div className="body">
      <div className="logo">
      <Link to="/"><img src="https://imgur.com/Ucg3ViS.png" alt=""/></Link>
      </div>
      <div className="bio">
        <button className="inbox">Inbox</button>
        <img src={props.ourUser.photo} className="profilePic"/>
      </div>
      <div className="search">
        <form action="POST" className="form">
          <input type="text" name="search" size="90" />
          <button type="submit">Enter</button>
        </form>
      </div>
      <div className="main">
        {mappedUsers}
      </div>
      <div className="sidebar">
        <form method="post" className="searchForm">
          Survival Skills <br/>
          <input type="checkbox" name="Weapon" id=""/> Weapon <br/>
          <input type="checkbox" name="Cooking"/> Cooking <br/>
          <input type="checkbox" name="First Aid" id=""/> First Aid <br/>
          <input type="checkbox" name="Basket Weaving" id=""/> Basket Weaving <br/>
        </form>
      </div>
    </div>
  )
}

export default List;
