import React from 'react'
import Card from './ServicesCard'
import './Services.css'
import {Starter, Gold, Diamond} from './ServicesData'

function Services() {
    return (
        <div className='sr-main'>
            <Card {...Starter}/>
            <Card {...Gold}/>
            <Card {...Diamond}/>
        </div>
    )
}

export default Services
