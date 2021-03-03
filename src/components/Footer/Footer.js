import React from 'react'
import FooterList from './FooterList'
import {AboutUs , ContactUs, Videos, SocialMedia} from './FooterData'

function Footer() {
    return (
        <div className='ft-main'>
            <div className='ft-header'>
                Join our exclusive membership to receive the latest news and trends
            </div>
            <form>
                <p>You can unsuscribe at any time</p>
                <input type='text' placeholder='Your Email'/>
                <button>Subscribe</button>
            </form>
            <FooterList header='AboutUs' name='AboutUs'/>
        </div>
    )
}

export default Footer
