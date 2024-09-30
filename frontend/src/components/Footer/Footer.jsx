import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1>TUMMYLICIOUS</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum est consequuntur amet, delectus deleniti perspiciatis aperiam. Atque, autem expedita. Excepturi expedita vel at dicta eius laudantium repudiandae minima nam!
                    </p>
                    <div className="footer-social-icons">
                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                        <FontAwesomeIcon icon={faTwitter} size='2x' />
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Phone: +1 123 456 7890</li>
                        <li>Email: [info@company.com](mailto:info@company.com)</li>

                    </ul>
                </div>

            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 @ Tummylicious.com-All Rights Reserved</p>
        </div>
    )
}

export default Footer
