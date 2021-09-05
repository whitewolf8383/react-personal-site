import React, { useState } from 'react';
import SectionHeader from '../SectionHeader';
import InfoBox from './InfoBox';
import Images from '../../images/images';
import Map from './Map'; 
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact-div">
      <SectionHeader value="CONTACT"/>
      <div className="contact-div-left">
        <InfoBox img={Images.email} name="My Email" subName="keith.francis83@gmail.com"/>
        <InfoBox img={Images.text} name="Text Me" subName="+1 (970) 779-2967"/>
        <InfoBox img={Images.relocate} name="Relocate Option" subName="South Eastern Texas"/>
      </div>
      <div className="contact-div-right">
        <InfoBox img={Images.locate} name="My Location" subName="Aurora, CO 80015"/>
        <div id="map">
          <Map />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;