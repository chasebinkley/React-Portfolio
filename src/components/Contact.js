import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contact-img" rel="./public/portfolioPic.jpg" width="180" height="180" alt="contact-img"/>
                <h3><strong>Chase Binkley</strong></h3>
                <h4>Random Text</h4>
                <h4>Email Id: chasebinkley@yahoo.com</h4>
                <a id="mail" href="chasebinkley@yahoo.com"/>
                <h4>Contact number: 808-277-3492</h4>
            
            </section>
        )
    }
}
export default Contact;