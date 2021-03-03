import React from 'react'
import { Link } from 'react-router-dom'
import {AboutUs} from './FooterData'

function FooterList({header, name}) {
    return (
        <div>
            <h3>{header}</h3>
            {
                name.map(item => item.title)
            }
        </div>
    )
}

export default FooterList
