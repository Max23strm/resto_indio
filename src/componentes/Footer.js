import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            </div>
            <p>&copy; 2021 Indianfood.com</p>
        </div>
    )
}

export default Footer;