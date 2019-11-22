import React from 'react';

function Profile(props) {

  let content

  if (!props.selectedUser) {
    // there is no user yet
    content = <p>No user selected!</p>
  } else {
    // we have a user!
    content = <p>My name is {props.selectedUser.name}</p>
  }
  

  return(
    <div>
      <div>
        Profile Photo
      </div>
      <div>
        {content}
      </div>
    </div>

  )
}

export default Profile;