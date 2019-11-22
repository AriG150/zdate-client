import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage(){

  return(
    <div className="homepage">
      <img src="https://imgur.com/Ucg3ViS.png" alt=""/>
      <h5>So...the apocolypse happened. That sucked, right? </h5>
      <h6>But, like, honestly, in between killing people and running away I still want....companionship...</h6>
      <h6>Don't you?...</h6>
      <Link to="/list" className="link"> Enter </Link>
    </div>
  )
}

export default Homepage;