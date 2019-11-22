import React from 'react';
import Skill from './Skill';
import {Link} from 'react-router-dom';



function Profile(props) {

  let content
  let skills
  let photo 

  if (!props.selectedUser) {
    // there is no user yet
    content = <p>No user selected!</p>
  } else {
    // we have a user!
    content = <p>My name is {props.selectedUser.name}</p>
  }
  
  if (!props.selectedUser) {
    // there is no user yet
    skills = <p>No skills</p>
  } else {
    // we have a user!
    console.log(props.selectedUser.skills)
    skills = props.selectedUser.skills.map((skill, idx) => {
      console.log(skill)
      // return <li>{skill}</li>
      return <Skill skill={skill} key={idx} />
    })
  }

  if (!props.selectedUser) {
    // there is no user yet
    photo = <p>no photo</p>
  } else {
    // we have a user!
    photo = <img src={props.selectedUser.photo} />
  }

  return(
    <div>
      <Link to="/list"> Back </Link>
      <div>
        {photo}
      </div>
      <div>
        {content}
        <ul>
          {skills}
        </ul>
      </div>
    </div>

  )
}

export default Profile;