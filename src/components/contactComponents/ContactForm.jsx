import React from 'react';

function ContactForm() {
  function sendMessage() {
    let messageData = {
      fname: document.querySelector('#fName').value,
      email: document.querySelector('#email').value,
      subject: document.querySelector('#subject').value,
      message: document.querySelector('#message').value
    }

    window.open(`mailto:keith.francis83@gmail.com?subject=${messageData.subject}&body=From:${messageData.fname}
    ${messageData.message}`);
    alert("Thank you, your message has been sent.");
  }

  return(
    <div className="contactform-div">
      <form>
        <input id="fName" type="text" placeholder="Your Name*" />
        <input id="email" type="email" placeholder="Your Email*" />
        <input id="subject" type="text" placeholder="Email Subject*" />
        <textarea id="message" type="text" placeholder="Enter your message...*" />
      </form>
      <button onClick={sendMessage} id="messageBtn">Send Message</button>
    </div>
  );
}

export default ContactForm;