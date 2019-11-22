import React from 'react';
import { Link } from 'react-router-dom';
import './css/Homepage.css';

function Homepage(){

  return(
    <div className="homepage">
      <h2>ZDate</h2>
      <h5>So...the apocolypse happened. That sucked, right? </h5>
      <h6>But, like, honestly, in between killing people and running away I still want....companionship...</h6>
      <h6>Don't you?...</h6>
      <Link to="/list"> Enter </Link>
    </div>
  )
}

export default Homepage;