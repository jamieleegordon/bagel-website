import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TripAdvisorIcon from '../assets/tripAdvisor.png'
import { Link } from "react-router-dom";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className = "footer">
        <div className = "socialMedia">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <Link to="/reviews">
              <img id = "tripAdIcon" src={TripAdvisorIcon} alt="TripAdvisor Rating" />
            </Link>
        </div>
        <p>&copy; 2023 jamieleesbagelboutique.com</p>
    </div>
  )
}

export default Footer