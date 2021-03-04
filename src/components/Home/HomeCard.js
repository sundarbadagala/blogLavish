import React from 'react'
import './HomeCard.css'

function HomeCard({position, title, header, content, btnValue, logo}) {
    return (
        <div className={position ? 'hc-main' : 'hc-main-reverse'}>
            <div className='hc-info'>
                <h3>{title}</h3>
                <h1>{header}</h1>
                <p>{content}</p>
                <button className='hc-btn'>{btnValue}</button>
            </div>
            <div className='hc-logobar'>
                <img src={logo} alt='' className='hc-logo'/>
            </div>
        </div>
    )
}

export default HomeCard
