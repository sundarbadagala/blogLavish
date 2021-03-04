import React from 'react'
import { Link } from 'react-router-dom'
import './FooterList.css'

function FooterList({header, name}) {
    return (
        <div className='fl-main'>
            <h3 className='fl-header'>{header}</h3>
            <ul>
            {
                name.map(item => <li className='fl-list-items'><Link className={item.cName} to={item.path}>{item.title}</Link></li>)
            }
            </ul>
        </div>
    )
}

export default FooterList
