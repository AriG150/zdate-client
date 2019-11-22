import React from 'react';
import Skill from './Skill';
import {Link} from 'react-router-dom';
import './css/Profile.css';



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
    <div>
      <Link to="/list"> Back </Link>
      <i class="material-icons md-48">sentiment_satisfied_alt</i> 
      <i class="material-icons md-48">sentiment_very_dissatisfied </i>
      <div>
        {photo}
      </div>
      <div>
        {content}
        <ul>
          {skills}
        </ul>
      </div>
      <form >
        <label> 
          <div>
            Say Hello to :
          </div> <br/>
          <textarea  />
        </label> <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>

  )
}

export default Profile;