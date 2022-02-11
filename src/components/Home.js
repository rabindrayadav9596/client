import React from 'react';
import '../styles/Home.css';
import JakeFromStateFarm from '../images/JakeFromStateFarm.jpg'
export default function Home() {
  return (
      <div className = "home">
         <div className="home-contents">
            <h3><a id="anchor-home">Welcome to Low Cost Claim Scanner</a></h3>
            <hr></hr>
           
            <p>Login to your account for better operation of the application.</p>
            <p>You can choose to scan the desired claim or access the Cases files for the respective account.</p>
        </div>
        <img className="home-image" src={JakeFromStateFarm} alt="JakeFromStateFarm"></img>
       
    </div>
  );
}
