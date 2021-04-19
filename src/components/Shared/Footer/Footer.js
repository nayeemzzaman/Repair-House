import React from 'react';
import './Footer.css';
import FooterColumn from '../FooterColumn/FooterColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const logo = [
        {name: 'Repair House'}
    ]
    const ourAddress = [
        {name: "Zigatola, Dhaka, Bangladesh" , link: "//google.com/map/dhaka"},       
    ]
    const pages = [
        {name: "Home" , link: "/emergency"},
        {name: "About Us" , link: "/aboutus"},
        {name: "Services" , link: "/services"},
        {name: "Testimonial" , link: "/testimonial"},
        {name: "Dashboard" , link: "/checkup"},
        {name: "Contact" , link: "/checkup"}
    ]
    const services = [
        {name: "Cracked Screens" , link: "/#"},
        {name: "Broken Casings" , link: "/checkup"},
        {name: "Software Fixes" , link: "/personal-treatment"},
        {name: "Battery Replacements" , link: "/tooth-extract"},
        {name: "Non working buttons" , link: "/checkup"},
        {name: "Broken Inputs" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="container row py-5">
                    <FooterColumn key={1} menuTitle={""} menuItems={logo}/>
                    <FooterColumn key={2} menuTitle="Services" menuItems={services}/>
                    <FooterColumn key={3} menuTitle="Pages" menuItems={pages}/>
                    <FooterColumn key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn-brand">+2025550295</button>
                        </div>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;