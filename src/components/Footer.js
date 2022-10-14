import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={ <link href="https://www.instagram.com" />}/> <TwitterIcon  /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2022 iTonyTopGM.com, Inc.</p>
    </div>
  );
}

export default Footer;