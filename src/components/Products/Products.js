import React from 'react'
import './Products.css'
import logo from '../Home/images/svg-2.svg'
import Card from './ProductsCard'

function Products() {
    return (
        <div className='pd-main'>
            <div>
                <img src={logo} alt='' className='pd-background'/>
            </div>
            <div className='pd-content'>
                <Card/>
            </div>
        </div>
    )
}

export default Products
