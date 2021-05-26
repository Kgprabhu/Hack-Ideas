import React from 'react';
import './Footer.css'

export class Footer extends React.Component{
  render(){
    return(
      <div className="footer-container">
         <div className="footer-section">
            <span class="footer-heading-title">Get in Touch</span>
            <div className="contact-details">
               <div className="company-address">
               <span className="title">Contact US</span>
                  <span>1800-102-1265</span>
               </div>
               <div className="contact-us">
                  <span className="title">Mail us</span>
                  <span>help@scripbox.com</span>
               </div>
            </div>
         </div>
      </div>
    )
  }
}