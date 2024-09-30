import React from 'react'
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faList, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <FontAwesomeIcon icon={faCirclePlus} size='2x' />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <FontAwesomeIcon icon={faList} size='2x' />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/order" className="sidebar-option">
          <FontAwesomeIcon icon={faCartShopping} size='2x' />
          <p>Orders</p>
        </NavLink>
        <NavLink to="/add-restaurant" className="sidebar-option">
          <FontAwesomeIcon icon={faCartShopping} size='2x' />
          <p>Add Restaurant</p>
        </NavLink>
      </div>



    </div>
  )
}

export default Sidebar
