import React from 'react';
import Skill from './Skill';
import {Link} from 'react-router-dom';
import './Profile.css';
import Chat from './Chat';
import Buttons from './Buttons';



function Profile(props) {
  let content
  let skills
  let photo 

  if (!props.selectedUser) {
    // there is no user yet
    content = <p>No user selected!</p>
  } else {
    // we have a user!
    content =
    <div>
      <div>
        My name is {props.selectedUser.name}
      </div>
      <div>
        My Bio: {props.selectedUser.bio}
      </div>               
    </div>
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
    <div className="profile">
      <Link to="/list" className="link"> Back </Link>
      
      {/* <i class="material-icons md-48">sentiment_satisfied_alt</i>  */}
      {/* <i class="material-icons md-48">sentiment_very_dissatisfied </i> */}
      <div>
        {photo}
      </div>
      <br />
        <br/>
      <div>
        {content}
        <br />
        <br/>
        <br/>
        Skills I Bring to the Table:
        {/* <br/> */}
        {/* <br/> */}
        <ul>
          {skills}
        </ul>
      </div>
      <Buttons />
      {/* <Chat /> */}
    </div>

  )
}

export default Profile;