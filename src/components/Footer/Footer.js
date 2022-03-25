import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
        <div className="footer__policies">
            <p className="footer__policy">Shipping Policy</p>
            <p className="footer__policy">Return Policy</p>
            <p className="footer__policy">Privacy Policy</p>
            <p className="footer__policy">Terms of service</p>
            <p className="footer__policy">Search</p>
            <p className="footer__policy footer__policy--copyright">Copyright 2022 Shopify Inc.</p>
        </div>
        <div className="footer__list">
            <p className="footer__item">Home</p>
            <p className="footer__item">Contact Us</p>
            <p className="footer__item">About Us</p>
            <p className="footer__item">Testimonials</p>
        </div>
        <div className="footer__subscribe">
            <div className="footor__box">
                <p className="footer__join">Join our mailing list</p>
                <form className="footer__form">
                    <input 
                    className="footer__input"
                    placeholder="Email address">
                    </input>
                    <button className="footer__button">SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer