import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './List.css'

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
    <div className="body">
      <div className="logo">
        "logo"
      </div>
      <div className="bio">
        <img src={props.ourUser.photo} alt=""/>
        {/* <p>{props.ourUser.name}</p> */}
        <button>Inbox</button>
      </div>
      <div className="search">
        <form action="POST">
          <input type="text" name="search" />
          <button type="submit">Enter</button>
        </form>
      </div>
      <div className="main">
        {mappedUsers}
      </div>
      <div className="sidebar">
        <form method="post">
          Survival Skills <br/>
          <input type="checkbox" name="Weapon" id=""/> Weapon <br/>
          <input type="checkbox" name="Cooking"/> Cooking <br/>
          <input type="checkbox" name="First Aid" id=""/> First Aid <br/>
          <input type="checkbox" name="Rope Abilities" id=""/> Rope Abilities <br/>
          <input type="checkbox" name="KnifeAbilities" id=""/> Knife Abilities <br/>
        </form>
        I am a sidebar. Rawr.
      </div>
    </div>
  )
}

export default List;
