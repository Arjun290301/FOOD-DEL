import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets.js'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <img className='logo' src={assets.Logo} alt="" />


            </div>

            <img className='profile' src={assets.profile} alt="" />

        </div>
    )
}

export default Navbar
