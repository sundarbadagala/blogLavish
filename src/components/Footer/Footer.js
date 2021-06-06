import React, { useState } from 'react'
import FooterList from './FooterList'
import './Footer.css'
import {AboutUs , ContactUs, Videos, SocialMedia} from './FooterData'
import { Link } from 'react-router-dom'

function Footer() {
    const [sub, setSub]= useState('')
    const changeHandler=(e)=>{
        setSub(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        alert('Added '+ sub + ' successfully')
        setSub('')
    }
    return (
        <div className='ft-main'>
            <div className='ft-header'>
                Join our exclusive membership to receive the latest news and trends
            </div>
            <form className='ft-form' onSubmit={submitHandler}>
                <p className='ft-form-header'>You can unsuscribe at any time</p>
                <div className='ft-form-content'>
                <input type='text' placeholder='Your Email' className='ft-input' onChange={changeHandler}/>
                <button type='submit' className='ft-btn'>Subscribe</button>
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
                    Lavish &copy; 2021
                </div>
                <div className='ft-social'>
                    <Link to='//www.facebook.com/profile.php?id=100005741115085' target='_blank'><i className='fab fa-facebook'/></Link>
                    <Link to='//www.instagram.com/sundar_one/' target='_blank'><i className='fab fa-instagram'/></Link>
                    <Link to='//www.youtube.com/watch?v=hFJlKQV0H5g' target='_blank'><i className='fab fa-youtube'/></Link>
                    <Link to='//twitter.com/sundar_badagala' target='_blank'><i className='fab fa-twitter'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
