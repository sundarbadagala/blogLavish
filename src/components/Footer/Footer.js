import React from 'react'
import FooterList from './FooterList'
import './Footer.css'
import {AboutUs , ContactUs, Videos, SocialMedia} from './FooterData'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='ft-main'>
            <div className='ft-header'>
                Join our exclusive membership to receive the latest news and trends
            </div>
            <form className='ft-form'>
                <p className='ft-form-header'>You can unsuscribe at any time</p>
                <div className='ft-form-content'>
                <input type='text' placeholder='Your Email' className='ft-input'/>
                <button className='ft-btn'>Subscribe</button>
                </div>
            </form>
            <div className='ft-list'>
            <FooterList header='About Us' name={AboutUs}/>
            <FooterList header='Contact Us' name={ContactUs}/>
            <FooterList header='Videos' name={Videos}/>
            <FooterList header='Social Media' name={SocialMedia}/>
            </div>
            <div className='ft-downbar'>
                <div>
                    LAVISH <i className='fas fa-fingerprint'/>
                </div>
                <div>
                    Lavish &copy; 2020
                </div>
                <div className='ft-social'>
                    <Link to='/facebook'><i className='fab fa-facebook'/></Link>
                    <Link to='/instagram'><i className='fab fa-instagram'/></Link>
                    <Link to='/youtube'><i className='fab fa-youtube'/></Link>
                    <Link to='/twitter'><i className='fab fa-twitter'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
