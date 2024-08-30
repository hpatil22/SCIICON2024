import React from 'react';
import './LandingPage.css'; // Ensure to create this CSS file for styling
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = ({ username }) => {
    const {user } = useAuth0();
  return (
    <div className="landing-page">
      <div className="header">
        <img src="/img/scii.gif" alt="Logo" className="logo" style={{width:"35%"}}/>
        <h1 className="headline" >2024 Innovation meets Intelligence</h1>
      </div>
      <div className="welcome-message">
        <h2 className="welcome-text" style={{fontSize:"40px"}} >
          Welcome <span className="dynamic-username">Dr.{user.name}</span> to AI workshop
        </h2>
      </div>
      <div className="sponsor">
        <div className='sponsor-sub'>
        <p>Sponsored by</p>
        <img src="/img/Hru3dai_Logo.png" alt="Sponsor Logo" className="sponsor-logo" />

        </div>
      </div>
    </div>
  );
};

export default LandingPage;

