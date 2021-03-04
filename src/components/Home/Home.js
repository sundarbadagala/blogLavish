import React from 'react'
import Card from './HomeCard'
import Footer from '../Footer/Footer'
import {objOne, objTwo, objThree, objFour} from './HomeData'

function Home() {
    console.log(objOne.logo)
    return (
        <div>
            <Card {...objOne}/>
            <Card {...objTwo}/>
            <Card {...objThree}/>
            <Card {...objFour}/>
            <Footer/>
        </div>
    )
}

export default Home
