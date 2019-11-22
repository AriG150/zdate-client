import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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



  // mappedListitems = this.state.listItems.map((listItem, id) => <div className="describe" key={id}>
  //   <Checkbox className="checkbox" checked={listItem.checked} value={listItem._id} label='' onChange={(e) => this.handleChecked(e,id)} />
  //   <Link className="mapped-items" to={`/profile/${listItem._id}/adventure/${this.props.match.params.cName}`}>{listItem.name}</Link>  


  return(
    <div>
      <h2>Humans In Your Area: </h2>
      <div>
        <img src={props.ourUser.photo} alt=""/>
        <p>{props.ourUser.name}</p>
        <button>Inbox</button> <br/>
        <button>My Profile</button>
      </div>
        {mappedUsers}
    </div>
  )
}

export default List;
