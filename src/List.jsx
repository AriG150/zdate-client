import React, {useState, useEffect} from 'react';
import axios from 'axios';

function List(props){
  const [ourUser, setourUser] = useState('Michonne', 'www.photo.com')

  const mappedUsers = props.users.map((user, id) => (
    //TODO: change inforation that will show up to include all parts of User schema. 
    <div onClick={() => props.selectUser(user.id)} key={id} > {user.name}  </div>
  ))

  // TODO: ourUser information shows up in own div. 

  // mappedListitems = this.state.listItems.map((listItem, id) => <div className="describe" key={id}>
  //   <Checkbox className="checkbox" checked={listItem.checked} value={listItem._id} label='' onChange={(e) => this.handleChecked(e,id)} />
  //   <Link className="mapped-items" to={`/profile/${listItem._id}/adventure/${this.props.match.params.cName}`}>{listItem.name}</Link>  

  // useEffect(() => {
  //   axios.get('http://localhost:3001')
  //     .then((res) => {
  //       setUsers(res.data)
  //     })
  // }, [])

  return(
    <div>
      <p>{ourUser}</p>
      <p>Test User 1</p>
        {mappedUsers}

    </div>
  )
}

export default List;
