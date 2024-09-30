import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faBars, faBagShopping, faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (menu === "Menu" && location.pathname === "/") {
            scrollToSection('#explore-menu');
        }
        if (menu === "Contact Us" && location.pathname === "/") {
            scrollToSection('#footer');
        }
    }, [location.pathname, menu]);

    // Toggle the mobile menu
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");


    }

    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to='/' onClick={() => setMenu("home")}>
                    <img src={assets.logo} className='nav-logo' alt='logo' />
                </Link>
            </div>

            {/* Menu Links */}
            <ul className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <span
                    onClick={() => {
                        if (location.pathname !== "/") {
                            setMenu("Menu");
                            navigate('/');
                        } else {
                            setMenu("Menu");
                            scrollToSection('#explore-menu');
                        }
                    }}
                    className={menu === "Menu" ? "active" : ""}
                >
                    Menu
                </span>
                <Link to='/Restaurants' onClick={() => setMenu("Mobile App")} className={menu === "Mobile App" ? "active" : ""}>Restaurants</Link>
                <span
                    onClick={() => {
                        if (location.pathname !== "/") {
                            setMenu("Contact Us");
                            navigate('/');
                        } else {
                            setMenu("Contact Us");
                            scrollToSection('#footer');
                        }
                    }}
                    className={menu === "Contact Us" ? "active" : ""}
                >
                    Contact Us
                </span>
            </ul>

            {/* Hamburger Icon */}
            <div className="hamburger-icon" onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        < FontAwesomeIcon icon={faBasketShopping} size="2x" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>

                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign in</button>
                ) : (
                    <div className="navbar-profile">
                        <FontAwesomeIcon icon={faUser} size="2x" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}>
                                <FontAwesomeIcon className="profile-icon" icon={faBagShopping} />
                                <span>Orders</span>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <FontAwesomeIcon className="profile-icon" icon={faArrowRightFromBracket} />
                                <span>Logout</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Navbar;
