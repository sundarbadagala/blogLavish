import React from 'react'
import './ProductsCard.css'
import atm from './atm.png'

function ProductsCard() {
    return (
        <div>
            <div className='pd-info'>
            <img src={atm} alt='' className='pd-image'/>
            <h1>limited transactions</h1>
            </div>
        </div>
    )
}

export default ProductsCard
