import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Connect With us EveryDay</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>STUDENTWIN</h1>
            <span>SRI LANKA'S NO.01 ONLINE EDUCATION WEBSITE</span>
            <p>Be the Best of the Best. Join Us Today</p>

          <a href="https://www.facebook.com/ravindu.lakshanii" rel="noopener"> <i className='fab fa-facebook-f icon'></i></a>
          <a href="https://www.instagram.com/ravindu_lakshan_weerasingha/" rel="noopener"><i className='fab fa-instagram icon'></i></a>
          <a href="https://twitter.com/lakshanravindu9?s=09" rel="noopener"><i className='fab fa-twitter icon'></i></a>
          <a href="https://telegram.me/Lakshan8931"  rel="noopener"><i className='fab fa-telegram icon'></i></a>
          <a href="https://api.whatsapp.com/send?phone=+94786927032&amp;text=Hi lakshan"  rel="noopener"><i className='fab fa-whatsapp icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/courses'>All Courses</Link></li>
              <li><Link to='/team'>Team</Link></li>
              <li><Link to='/journal'>Blog</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to='/contact'>Contact Us</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                No 80, St.John Street,Colombo 07
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +94 78 692 7032
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                studentwin@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | Development <i className='fa fa-heart'></i> by LAKSHAN WEB SOLUTION (PVT) LTD.
        </p>
      </div>
    </>
  )
}

export default Footer
