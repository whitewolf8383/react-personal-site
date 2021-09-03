import React from 'react';
import SectionHeader from '../SectionHeader';
import InfoBox from './InfoBox';

/*
// Mapbox API Use
let key = 'pk.eyJ1IjoidjhpbnRlZ3JhIiwiYSI6ImNrdDN4NGxyeTBiOHgydmxsNzBiY281NHgifQ.E_C2UilogNDm8O2ZdpmPcw'
let lat = 39.678121;
let long = -104.961753;
const map = L.map('map').setView([lat, long], 15);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: key
}).addTo(map);
L.marker([lat, long]).addTo(map);
L.popup()
  .setLatLng([lat, long])
  .openOn(map);
*/


function Contact() {
  
  return (
    <div className="contact-div">
      <SectionHeader value="CONTACT"/>
      <InfoBox img="../../images/email.icon.png" name="My Email" subName="keith.francis83@gmail.com"/>
      <InfoBox img="../../images/email.icon.png" name="My Location" subName="Aurora, CO 80015"/>
      <div>  
        <div className="mapLeft-div">
          <InfoBox img="../../images/email.icon.png" name="Text Me" subName="+1 (970) 779-2967"/>
          <InfoBox img="../../images/email.icon.png" name="Relocate Option" subName="South Eastern Texas"/>
        </div>
        <div id="map" className="map-div">A Map Here!</div>
      </div>
    </div>
  );
}

export default Contact;