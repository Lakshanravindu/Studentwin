import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0884202956854!2d80.69541551457363!3d6.510491695290662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3f1c5c1b6b377%3A0x8a5347e3aa598803!2slakshan%20web%20solution!5e0!3m2!1ssi!2slk!4v1658395543661!5m2!1ssi!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe title="map" src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>No 80, St.John Street, Colombo 07</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> studentwin@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +94 78 692 7032</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
          <a href="https://www.facebook.com/ravindu.lakshanii" rel="noopener"> <i className='fab fa-facebook-f icon'></i></a>
          <a href="https://www.instagram.com/ravindu_lakshan_weerasingha/" rel="noopener"><i className='fab fa-instagram icon'></i></a>
          <a href="https://twitter.com/lakshanravindu9?s=09" rel="noopener"><i className='fab fa-twitter icon'></i></a>
          <a href="https://telegram.me/Lakshan8931"  rel="noopener"><i className='fab fa-telegram icon'></i></a>
          <a href="https://api.whatsapp.com/send?phone=+94786927032&amp;text=Hi lakshan"  rel="noopener"><i className='fab fa-whatsapp icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
