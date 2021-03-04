import React from 'react'
import './ServiceCard.css'

function ServicesCard({logo, user, price, time , details, card}) {
    return (
        <div className='sc-top'>
        <div className={card ? 'sc-main' : 'sc-main-i'}>
            <div className='sc-logo'><i class={logo}></i></div>
            <div className='sc-user'>{user}</div>
            <div className='sc-price'>{price}</div>
            <div className='sc-time'>{time}</div>
            <div className='sc-details'>
                {details[0]}<br/>
                {details[1]}<br/>
                {details[2]}<br/>
            </div>
            <button className='sc-btn'>Choose Plan</button>
        </div>
        </div>
    )
}

export default ServicesCard
