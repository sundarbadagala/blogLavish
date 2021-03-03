import React, { useState } from 'react'
import {Data} from './menuItems'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick]= useState(false)
    const clickHandler=()=>{
        setClick(!click)
    }
    return (
        <div className='nav-main'>
            <div className='nav-logo' onClick={clickHandler}>
                <Link to='/' className='logo-link'>
                     Lavish <i className="fad fa-fingerprint"></i>
                </Link>
            </div>
            <div onClick={clickHandler} className='nav-menu-logo'>
                {click ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </div>
            <div className={click ? 'menu active':'menu'}>
                <ul className='nav-list'>
                {
                    Data.map(item => <li className='nav-item' onClick={clickHandler}><Link to={item.path} className={item.cName}>{item.title}</Link></li>)
                }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
