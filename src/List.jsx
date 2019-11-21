import React, {useState, useEffect} from 'react';
import axios from 'axios';

function List(props){
  // const [ourUser, setourUser] = useState()

  const mappedUsers = props.users.map((user, id) => (
    <div onClick={() => props.selectUser(user.id)} key={id} > {user.name}  </div>
  ))

  // TODO: ourUser information shows up in own div. 

  // mappedListitems = this.state.listItems.map((listItem, id) => <div className="describe" key={id}>
  //   <Checkbox className="checkbox" checked={listItem.checked} value={listItem._id} label='' onChange={(e) => this.handleChecked(e,id)} />
  //   <Link className="mapped-items" to={`/profile/${listItem._id}/adventure/${this.props.match.params.cName}`}>{listItem.name}</Link>  


  return(
    <div>
      <h2>Humans In Your Area: </h2>
      <p>{props.ourUser}</p>
      <p>Test User 1</p>
        {mappedUsers}

    </div>
  )
}

export default List;
